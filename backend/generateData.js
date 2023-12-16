import Citizen from "./models/Citizen";
const newCitizen = new Citizen({
    citizenNumber: '12345',
    key: 'exampleKey',
  });
  
  newCitizen.save()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });