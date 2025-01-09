import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Main from "./Main";

function App() {
  return (
    <Auth0Provider
  domain="dev-61rdhj8lnje3erzp.us.auth0.com" 
  clientId="m3RYvOEZ9T0gayFm6XGX2E2F7qZMVoaV" 
  redirectUri={window.location.origin}
>
  <Main />
</Auth0Provider>

  );
}

export default App;
