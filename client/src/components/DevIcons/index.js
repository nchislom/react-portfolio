import React, { Component } from "react";
import "./style.css";

class DevIcons extends Component {
    
    constructor(props) {
        super(props);
        
    }
    
    getDevClass(acronym) {
        var langDict = {
            js: "devicon-javascript-plain",
            boot: "devicon-bootstrap-plain",
            cpp: "devicon-cplusplus-plain",
            css: "devicon-css3-plain",
            git: "devicon-git-plain",
            github: "devicon-github-plain",
            ex: "devicon-express-original",
            html: "devicon-html5-plain",
            jq: "devicon-jquery-plain",
            mongo: "devicon-mongodb-plain",
            mysql: "devicon-mysql-plain",
            node: "devicon-nodejs-plain",
            python: "devicon-python-plain",
            react: "devicon-react-original",
            sequelize: "devicon-sequelize-plain"
        }

        if(acronym in langDict){
            return langDict[acronym];
        }
    };

    render() {
        return( 
            <h2>
                <i className={ this.getDevClass(this.props.lang) } />
            </h2>
        )    
    };
};

export default DevIcons;