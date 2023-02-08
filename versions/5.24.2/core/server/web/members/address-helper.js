// helper to get user's address
let data = {};

const storeData = (key, value) => {
  data[key] = value;
};

const getData = (key) => data[key];

module.exports = {
  storeData,
  getData,
};
