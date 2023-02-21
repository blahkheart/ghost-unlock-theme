// Helper to get user's address from create magic link request
let data = {};

const storeData = (key, value) => {
  data[key] = value;
};

const getData = (key) => data[key];

module.exports = {
  storeData,
  getData,
};
