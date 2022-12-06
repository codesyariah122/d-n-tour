const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const lookupUserIp = async (url) => {
  try {
    return new Promise((resolve, reject) => {
      fetch(`https://api.ipify.org?format=json`)
        .then((data) => {
          resolve(data.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  } catch (error) {
    console.error(error);
  }
};

const userGeoLocation = async (url, apiKey) => {
  try {
    const responses = await fetch(`${url}?apiKey=${apiKey}`);
    return responses.json();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  lookupUserIp,
  userGeoLocation,
};
