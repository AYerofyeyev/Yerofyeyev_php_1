import React from "react";
import ReactDOM from "react-dom";

let menu = React.createClass({
  render: function(){
    return(
      <ul>
        <li>
          <a>
            Home
          </a>
        </li>
      </ul>
    )
  }
});

ReactDOM.render(<menu/>, document.getElementById("root"));
