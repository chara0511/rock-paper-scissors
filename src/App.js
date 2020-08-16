import React from "react";
import { GlobalStyles } from "./styles";
import Main from "./components/main";
import { Header, Demo, Rules } from "./components";
import MainState from "./components/context/mainState";

function App() {
  return (
    <MainState>
      <GlobalStyles />
      <Main>
        <Header />
        <Demo />
        <Rules />
      </Main>
    </MainState>
  );
}

export default App;
