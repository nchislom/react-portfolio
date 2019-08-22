import React, { Component } from "react";
import DevIcons from "../DevIcons";
import "./style.css";

class CardReveal extends Component {
    constructor(props) {
        super(props);
        
        this.state = {}
    }
    

    render() {
        return (
            <div className="col s12 m6 l2">
                <div className="card small">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt={ this.props.linkText } src={ this.props.image } />
                    </div>

                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{ this.props.title }<i class="material-icons right">more_vert</i></span>
                        <p><a href={ this.props.href }>{ this.props.linkText }</a></p>
                    </div>

                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{ this.props.title }<i class="material-icons right">close</i></span>
                        <p>{ this.props.revealedText }</p>
                        <p className="bigger"><DevIcons langs={ ["mongo"] }/></p>
                    </div>
                </div>
            </div>
    )};
};

export default CardReveal;