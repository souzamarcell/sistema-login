import React from "react";
import RoutesApp from "./sLogin/routes";
import { AuthProvider } from "./sLogin/contexts/auth";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RoutesApp />
        <GlobalStyle />
      </AuthProvider>
    </>
  );
}

export default App;
