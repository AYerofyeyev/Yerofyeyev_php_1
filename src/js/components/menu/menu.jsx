import React from "react";
import "./menu.scss";
import Dropdown from './submenu/submenu.jsx';

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = { isOpened: false };
    }

    toggleState(){
        this.setState({isOpened: !this.state.isOpened});
    }

    render(){
        let submenu;
        if (this.state.isOpened){
            submenu = <Dropdown />;
        }
        return(
            <nav>
                <ul>
                    <li>
                        <a>
                            Home
                        </a>
                    </li>
                    <li>
                        <a onMouseEnter={this.toggleState.bind(this)} onMouseLeave={this.toggleState.bind(this)}>
                            Articles:
                        </a>
                        {submenu}
                    </li>
                    <li>
                        <a>
                            Registration
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
