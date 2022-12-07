// const { lookupUserIp, userGeoLocation } = require("../models/services");
import { lookupUserIp, userGeoLocation } from "../models/services";

const lookUpUserIp = (req, res) => {
  const secretKey = process.env.NUXT_ENV_APP_SECRET_API;
  if (req.params.secret !== secretKey) {
    res.status(404).json({
      message: "Do your have secret key ??",
    });
  }
  const urlLookup = process.env.NUXT_ENV_APP_IP_DETECT_URL;
  lookupUserIp(urlLookup)
    .then((response) => {
      // console.log(response);
      if (response.ip) {
        res
          .json({
            message: "Ip public is detect",
            data: response.ip,
          })
          .status(200);
      }

      res
        .json({
          message: "Ip public is not detected",
        })
        .status(422);
    })
    .catch((err) => console.log(err));
};

const userLocator = (req, res) => {
  const secret = process.env.NUXT_ENV_APP_SECRET_API;
  const apiKey = process.env.NUXT_ENV_APP_GEOLOCATION_KEY;
  const geoLocationUrl = process.env.NUXT_ENV_APP_GEOLOCATION_URL;

  if (req.params.secret !== secret) {
    res.status(404).json({
      message: "Do your have secret key ??",
    });
  }

  userGeoLocation(geoLocationUrl, apiKey)
    .then((response) => {
      if (response.ip) {
        res
          .json({
            message: "Hallo get your locator",
            data: response,
          })
          .status(200);
      } else {
        res
          .json({
            message: "Location is not detected !!",
          })
          .status(422);
      }
    })
    .catch((err) => console.log(err));
};

// module.exports = {
//   lookUpUserIp,
//   userLocator,
// };

export { lookUpUserIp, userLocator };
