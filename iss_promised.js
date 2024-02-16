const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = (body) => {
  return request(`http://ipwho.is/${JSON.parse(body).ip}`);
};

const fetchISSFlyOverTimes = (body) => {
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${JSON.parse(body).latitude}&lon=${JSON.parse(body).longitude}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };