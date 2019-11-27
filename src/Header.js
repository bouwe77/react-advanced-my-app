import React, { useContext } from "react";
import styles from "./App.module.css";
import AuthContext from "./auth/AuthContext";

export default ({ appInfo }) => {
  const { signOut, isSignedIn } = useContext(AuthContext);

  return (
    <header>
      <a href="#">
        <h1>{appInfo.appShortName}</h1>
      </a>
      <nav>
        {isSignedIn && (
          <a href="#" onClick={signOut}>
            sign out
          </a>
        )}
      </nav>
    </header>
  );
};
