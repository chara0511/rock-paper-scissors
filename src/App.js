import React from "react";
import { GlobalStyles } from "./styles";
import Main from "./components/main";
import { Header, Demo, Rules } from "./components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Header />
        <Demo />
        <Rules />
      </Main>
    </>
  );
}

export default App;
