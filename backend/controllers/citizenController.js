const Citizen = require('../models/Citizen');
const bcrypt = require('bcrypt');


module.exports.createCitizen_POST = async (req,res) => {
    const { citizenNumber, key } = req.body;
    try {
        const salt = await bcrypt.genSalt();
        const hashedKey = await bcrypt.hash(key,salt);
        const citizen = await Citizen.create({ citizenNumber, hashedKey });
        res.status(201).json({user: citizen});
    }catch(err) {
        res.status(400).json({ error:err.message });
    }
};


module.exports.getCitizenKey_POST = async (req, res) => {
  const { citizenNumber, key } = req.body;

  try {
    const citizen = await User.findOne({ citizenNumber });

    if (citizen) {
      const isValidKey = await bcrypt.compare(key, citizen.key);
      const isExpiredKey = citizen.isExpiredKey === false ? false : true;

      if (isValidKey && !isExpiredKey) {
        return res.status(200).json({ user: citizen });
      } else if (isValidKey && isExpiredKey) {
        res.status(400).json({error:'Key daha önce kullanılmış!'})
      } else if(!isValidKey){
        res.status(400).json({error:'Böyle bir bulunmamaktadır.'})
      }
    } else {
        res.status(400).json({error:'Böyle bir vatandaş bulunmamaktadır.'})
    }
  } catch (err) {
    res.status(400).json({err});
  }
};
