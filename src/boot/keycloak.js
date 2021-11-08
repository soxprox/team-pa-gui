import Keycloak from "keycloak-js";
import { api } from "./axios"

export default ({ store }) => {
  return new Promise((resolve, reject) => {
    const initOptions = {
      url: process.env.KEYCLOAK_URL,
      realm: process.env.KEYCLOAK_REALM,
      clientId: process.env.KEYCLOAK_CLIENT_ID,
    };

    let keycloak = Keycloak(initOptions);
    keycloak
      .init({ onLoad: "check-sso" })
      .then(() => {
        store.dispatch("keycloak/setKeycloak", keycloak);
        resolve();
      })
      .catch((error) => {
        console.log(error);
      });
  })
};
