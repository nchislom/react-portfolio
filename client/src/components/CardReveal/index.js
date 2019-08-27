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
            <div className="col s12 m6 l3">
                <div className="card small">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt={ this.props.linkText } src={ this.props.image } />
                    </div>

                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{ this.props.title }<i class="material-icons right">more_vert</i></span>
                        <p><a href={ this.props.href }>{ this.props.linkText }</a></p>
                        
                        {/* Conditional render of second link */}
                        { this.props.linkText2 ? <p><a href={ this.props.href2 }>{ this.props.linkText2 }</a></p> : <div /> }
                    </div>

                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{ this.props.title }<i class="material-icons right">close</i></span>
                        <p>{ this.props.revealedText }</p>
                        <DevIcons lang={ this.props.devicon } />
                    </div>
                </div>
            </div>
    )};
};

export default CardReveal;