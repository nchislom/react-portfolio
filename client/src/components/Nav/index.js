import React, { Component } from "react";
import "./style.css";

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


render() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper cyan">
                    <a href="#" className="brand-logo left">Norman Chislom</a>
                    {/* <a href="#" data-target="mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
                    {/* <ul id="nav-mobile" className="right hide-on-med-and-down"> */}
                    <ul id="nav-mobile" className="right">
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/skillset">Skillset</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                    <ul class="sidenav right" id="mobile">
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/skillset">Skillset</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </nav>

        </div>
    )};
};

export default Nav;
