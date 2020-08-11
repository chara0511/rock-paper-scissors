import React from "react";
import { GlobalStyles } from "./styles";
import Main from "./components/main";
import Header from "./components/header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Header />
      </Main>
    </>
  );
}

export default App;
