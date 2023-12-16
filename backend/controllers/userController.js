const User = require('../models/User');
const bcrypt = require('bcrypt');


module.exports.user_post = async (req, res) => {
  const { username, key } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user) {
      const isValidKey = await bcrypt.compare(key, user.key);
      const isExpiredKey = user.isExpiredKey === false ? false : true;

      if (isValidKey && !isExpiredKey) {
        return res.status(200).json({ user: user });
      } else if (isValidKey && isExpiredKey) {
        res.status(400).json({error:'Key daha önce kullanılmış!'})
      } else if(!isValidKey){
        res.status(400).json({error:'Böyle bir bulunmamaktadır.'})
      }
    } else {
        res.status(400).json({error:'Kullanıcı bulunamadı.'})
    }
  } catch (err) {
    res.status(400).json({err});
  }
}