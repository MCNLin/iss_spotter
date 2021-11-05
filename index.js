// const { fetchMyIP } = require('./iss');

// const { fetchCoordsByIP } = require("./iss");

// // fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP ('174.119.235.1', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });
const {fetchISSFlyOverTimes} = require('./iss');

const coordInputs = { latitude: '43.653225', longitude: '-79.383186' };

fetchISSFlyOverTimes(coordInputs, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});
