import React from "react";
import "./menu.scss";

class Menu extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul>
                <li>
                    <a>
                        Home
                    </a>
                </li>
            </ul>
        );
    }
}

export default Menu;
// React.render(<Menu />, document.getElementById('root'));
