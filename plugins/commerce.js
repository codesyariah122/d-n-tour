import CommerceSDK from "@chec/commerce.js";

const commerce = new CommerceSDK(process.env.CHEC_PUBLIC_API_KEY);

export default (_, inject) => {
  inject("commerce", commerce);
};
