import React from "react";
import "./article1.scss";

class Article1 extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <article class="vsreact">
                <p><a name="top"></a></p>
                <h1>So React is getting slower with increasing number of elements?</h1>
                <img class="illustration" src=<%= require("./img/vanilla_vs_react.png") %> alt="See chart through bottom link"></img>
                <p>
                    The time of adding other images has to be nearly constant, because we add 100 images and then another 100 images — the same amount of work needs to be done, right? We do not manipulate with all the images — unless diffing mechanism says that last update
                    information is not valid anymore and updates previous images too. But just that one simple H3 with last update information is diffed against current DOM not the whole image div, because this element is the one that is different in the
                    current Virtual DOM and the Virtual DOM that returned render() method of FlickrImageTime component I just added.
                </p>
                <p>
                    Simply said: React DOM updates are based on the Components that are linked with their Virtual DOM counterparts as well as
                    their brothers sitting in the real DOM. <span>In theory — the more React Components you make the faster React is. (Dan Abramov said it on twitter, I would have to scroll pretty far to find it, but trust me, he said that and I agree).</span>
                </p>
                <a target="_blank"  href="https://medium.com/@vojta/so-react-is-getting-slower-with-increasing-number-of-elements-8d0c322e6245">Link to the original article by Vojta Tranta from Jul 1, 2016</a>
                <table cols="3" cellpadding="25" border="2" width="100%" cellspacing="0">
                    <tr>
                        <td rowspan="4">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td rowspan="2">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td colspan="2">&nbsp;</td>
                    </tr>
                </table>
                <p><a id="arrowup" href="#top"><img src=<%= require("./img/arrowup.svg") %> alt="To top" ></img></a></p>
            </article>
        );
    }
}

export default Article1;
