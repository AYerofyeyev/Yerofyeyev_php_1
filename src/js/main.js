import React from "react";
import ReactDOM from "react-dom";
import "../css/main.scss";

import Menu from "./components/menu.jsx";

const render = Component => {
    ReactDOM.render(
            <Component />,
        document.getElementById('root')
    );
};

render(Menu);
