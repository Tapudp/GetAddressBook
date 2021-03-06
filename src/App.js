import storage from "local-storage-fallback";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ButtonContainer } from "./components/Atom/ButtonContainer";
import Default from "./pages/Default";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  body{
    overflow: hidden;
    height: 100vh;
    background-color: ${props =>
      props.theme.mode === "dark" ? "#4c4c4c" : "#fff"};
    color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#000")};
    TableContainer{
      
      background-color: ${props =>
        props.theme.mode === "dark" ? "#4c4c4c" : "#fff"};
      color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#000")};
    }
    .myfonts{
      color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#000")};
    }
  }
`;

function getInitialTheme() {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="d-flex flex-column">
          <ButtonContainer
            onClick={event =>
              setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }
          >
            Toggle Theme
          </ButtonContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Default} />
          </Switch>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
