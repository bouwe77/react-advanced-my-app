import React, { useContext } from "react";
import LoginForm from "../auth/LoginForm";
import AuthContext from "../auth/AuthContext";

function HomePage() {
  const { signIn } = useContext(AuthContext);

  return (
    <>
      <LoginForm signIn={signIn} />
    </>
  );
}

export default HomePage;
