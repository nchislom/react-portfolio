import React, { Component } from "react";
import CardReveal from "../CardReveal";
import "./style.css";

class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


render() {
    return (
        <section className="row">
            <CardReveal
                title="Adventure Book v2"
                image="./images/office.jpg" 
                linkText="Visit"
                revealedText="A full-stack, MERN based text adventure game and game creator"
                langs={["js", "mongo"]}
                />

            <CardReveal
                title="MusiMeme"
                image="./images/office.jpg" 
                linkText="Visit"
                revealedText="A music-themed image search and board-maker"
                />

            <CardReveal
                title="O.C.C.O.M!"
                image="./images/office.jpg" 
                linkText="Visit"
                revealedText="'Oddities, Conspiracies, and Cryptids...Oh My!' is a paranormal themed word-guess game in the classic style of 'Hangman'"
                />

            <CardReveal
                title="Clicky Game"
                image="./images/office.jpg" 
                linkText="Visit"
                revealedText="React-based memory card game"
                />

            <CardReveal
                title="Dune Trivia"
                image="./images/office.jpg" 
                linkText="Visit"
                revealedText="Test Revealed Text"
                />
            
            <CardReveal
                title="Battle of the Old Ones"
                image="./images/office.jpg" 
                linkText="Visit"
                revealedText="Battle of the Old Ones"
                />
        </section>
    )};
};

export default Portfolio;
