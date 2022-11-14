const contentful = require("contentful");

module.exports = contentful.createClient({
  space: process.env.NUXT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.NUXT_APP_CONTENTFUL_ACCESS_TOKEN,
});
