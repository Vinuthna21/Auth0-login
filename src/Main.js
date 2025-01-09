import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Main = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Auth0 Login Example</h1>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <>
          <h3>Welcome, {user.name}</h3>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Main;
