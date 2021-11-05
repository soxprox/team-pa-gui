import Keycloak from "keycloak-js";

export default ({ store }) => {
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
    })
    .catch((error) => {
      console.log(error);
    });
};
