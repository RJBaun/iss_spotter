const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((response) => {
    printTimes(response);
  })
  .catch((error) => {
    console.log(`It didn't work: ${error.message}`);
  });

const printTimes = (passTimes) => {
  for (const time of passTimes) {
    console.log(time);
  }
};
