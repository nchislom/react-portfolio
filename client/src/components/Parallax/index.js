import React, { Component } from "react";
import "./style.css";

class Parallax extends Component {
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

export default Parallax;


<div class="parallax-container">
      <div class="parallax"><img src="images/parallax1.jpg"></div>
    </div>
    <div class="section white">
      <div class="row container">
        <h2 class="header">Parallax</h2>
        <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="images/parallax2.jpg"></div>
    </div>