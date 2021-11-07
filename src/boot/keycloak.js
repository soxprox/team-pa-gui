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
        api
          .get("/user-settings/23193c4c-cc8d-4cac-89ff-affcf57c434a")
          .then(({ data }) => {
            store.dispatch("user/setUserSettings", data);
          });
        resolve();
      })
      .catch((error) => {
        console.log(error);
      });
  })
};
