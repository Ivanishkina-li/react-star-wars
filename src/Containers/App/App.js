import "./App.css";
import Header from "../../Components/Header/Header";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import routesConfig from "../../routes/routesConfig";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header />

          <Switch>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
