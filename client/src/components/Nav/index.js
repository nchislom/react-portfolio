import React, { Component } from "react";
import M from "materialize-css";
import "./style.css";

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, { edge: "right"});
          });
    }

render() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper cyan">
                    <a href="#!" class="brand-logo flow-text">Norman Chislom</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/skillset">Skillset</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/skillset">Skillset</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    )};


};

export default Nav;
