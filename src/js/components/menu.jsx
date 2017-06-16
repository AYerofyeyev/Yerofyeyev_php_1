import React from "react";
import "./menu.scss";

class Menu extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <nav>
                <ul>
                    <li>
                        <a>
                            Home
                        </a>
                    </li>
                    <li>
                        <a>
                            Articles:
                        </a>
                        <ul>
                            <li>
                                <a>
                                    Article1
                                </a>
                            </li>
                            <li>
                                <a>
                                    Article2
                                </a>
                            </li>
                            <li>
                                <a>
                                    Article3
                                </a>
                            </li>
                            <li>
                                <a>
                                    Article4
                                </a>
                            </li>
                            <li>
                                <a>
                                    Article5
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>
                            Contacts
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
// React.render(<Menu />, document.getElementById('root'));
