import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
// import { useDispatch } from "react-redux";
import { DataContext } from "./stateManager/StateProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Secrets from "Secrets";
import { useHistory } from "react-router-dom";

const App = () => {
  const { apis } = useContext(DataContext);
  const history = useHistory();

  const decide = () => {
    apis
      .webIndex()
      .then((resp) => {
        console.log(resp);
        if (resp) {
          history.replace("/admin");
        }
      })
      .catch(() => {});
  };
  React.useEffect(() => {
    decide();
  }, []);
  return (
    <Switch>
      <GoogleOAuthProvider clientId={Secrets.GOOGLE_CLIENT_ID}>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/admin`} component={AdminLayout} />
      </GoogleOAuthProvider>
    </Switch>
  );
};

export default App;
