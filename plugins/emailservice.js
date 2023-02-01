import emailjs from "emailjs-com";

const emailJs = emailjs.sendForm(
  process.env.NUXT_ENV_APP_SERVICE_ID_EMAILJS,
  process.env.NUXT_ENV_APP_TEMPLATE_ID_EMAILJS
);

export default (_, inject) => {
  inject("emailJs", emailJs);
};
