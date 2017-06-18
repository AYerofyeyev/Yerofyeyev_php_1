import React from "react";
import ReactDOM from "react-dom";
import "../css/main.scss";

import Menu from "./components/menu/menu.jsx";
import RegistrationForm from "./components/registrationForm/registrationForm.jsx";

const render = Component => {
    ReactDOM.render(
            <Component />,
        document.getElementById('root')
    );
};

render(Menu);
