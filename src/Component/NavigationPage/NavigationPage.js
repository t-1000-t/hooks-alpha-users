import React from "react";
import routes from "../../routes/routes";
import { useHistory } from "react-router-dom";
import "./navigationPage.css";

const NavigationPage = () => {
  let history = useHistory();
  return (
    <header className="flex vertical_center">
      <div className="flex horizontal_center">
        <ul className="flex row start">
          <li
            className="navLineNoStyle pad"
            onClick={() => history.push(routes.HOME)}
          >
            Home
          </li>
          <li
            className="navLineNoStyle pad"
            onClick={() => history.push(routes.EMPLOYEES)}
          >
            Employees
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavigationPage;
