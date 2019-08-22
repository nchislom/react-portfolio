import React, { Component } from "react";
import "./style.css";

class DevIcons extends Component {
    constructor(props) {
        super(props);
        
        this.state = {}

        const langItems = this.state.langs.map((lang) =>
            { this.getDevClass[lang] }
        );
    }
    
    getDevClass(acronym) {
        var langDict = {
            js: "devicon-javascript-plain",
            boot: "devicon-bootstrap-plain",
            cpp: "devicon-cplusplus-plain",
            css: "devicon-css3-plain",
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
        return(<i className={this.landi } /> )    
    };
};

export default DevIcons;