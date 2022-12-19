import React from "react";
import { RouteType, routeConfig } from "./config";
import BaseLoading from "components/BaesLoading";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import App from "../App";

interface IProps {
  children?: React.ReactNode;
}

function MainRouter(props: IProps) {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route
            path={"/"}
            component={() => {
              return (
                <App>
                  <React.Suspense fallback={<BaseLoading />}>
                    <Switch>
                      {routeConfig.map((route: RouteType) => {
                        const { path, component, exact } = route;
                        return <Route key={path} path={path} component={component} exact={exact} />;
                      })}
                      <Redirect to={"/generate-columns"} />
                    </Switch>
                  </React.Suspense>
                </App>
              );
            }}
          />
        </Switch>
      </HashRouter>
    </>
  );
}

export default MainRouter;
