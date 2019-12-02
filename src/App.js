import storage from "local-storage-fallback";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import Default from "./pages/default";
import Home from "./pages/home";

const GlobalStyle = createGlobalStyle`
  body{
    overflow: hidden;
    background-color: ${props =>
      props.theme.mode === "dark" ? "#4c4c4c" : "#fff"};
    color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#000")};
    .tableContainer{
      background-color: ${props =>
        props.theme.mode === "dark" ? "#4c4c4c" : "#fff"};
      color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#000")};
      overflow-y: auto;
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
        <div className="App">
          <button
            className="float-right mr-5"
            onClick={event =>
              setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }
          >
            Toggle Theme
          </button>
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
