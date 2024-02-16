const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error.message);
  }
  printTimes(passTimes);
});

const printTimes = (passTimes) => {
  for (const time of passTimes) {
    console.log(time);
  }
};


