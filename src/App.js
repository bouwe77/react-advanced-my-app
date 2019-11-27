import React, { useState } from "react";

import styles from "./App.module.css";

import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthContext from "./auth/AuthContext";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  function signIn(username, password) {
    setIsSignedIn(true);
  }

  function signOut() {
    setIsSignedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
      <div className={styles.app}>
        <Header appInfo={appInfo} />
        <div className={styles.content}>
          {isSignedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
        <Footer appInfo={appInfo} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;

const appInfo = {
  appShortName: "jaze",
  appLongName: "just another zearch engine",
  author: "Bouwe",
  website: "https://bouwe.io"
};
