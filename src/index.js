import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "assets/css/App.css";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ToastProvider } from "react-toast-notifications";
import { StateProvider } from "stateManager/StateProvider";
import { Redirect } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HashRouter>
        <ToastProvider>
          <StateProvider>
            <Redirect exact from="/" to="/auth" />
            <App />
          </StateProvider>
        </ToastProvider>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
