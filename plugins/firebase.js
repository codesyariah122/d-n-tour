import { initializeApp, getApps } from "@firebase/app";
import { getMessaging } from "@firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD8VS_rO_IpZ_E3e_ZOzD7a8Rl8jWCl01w",
  authDomain: "dntour-firebase.firebaseapp.com",
  projectId: "dntour-firebase",
  storageBucket: "dntour-firebase.appspot.com",
  messagingSenderId: "120238160670",
  appId: "1:120238160670:web:3a9d24fdcc690f534fa70f",
};

const apps = getApps();

const app = !apps.length ? initializeApp(firebaseConfig) : apps[0];

export const messaging = getMessaging(app);
