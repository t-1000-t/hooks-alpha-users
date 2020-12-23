import NavigationPage from "../Component/NavigationPage/NavigationPage";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import routes from "../routes/routes";
import Home from "../Component/Home/Home";
import Employees from "../Component/Employees/Employees";
import Footer from "../Component/Footer/Footer";

function App() {
  return (
    <div className="appContainer">
      <div className="appContent">
        <NavigationPage />
        <Switch>
          <Route exact path={routes.HOME} component={Home} />
          <Route exact patch={routes.EMPLOYEES} component={Employees} />
          <Redirect to="/" />
        </Switch>
      </div>
      <div className="appFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
