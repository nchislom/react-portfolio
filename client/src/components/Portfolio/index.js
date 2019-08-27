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
                title="Adventure Book"
                image="./images/adventure_book_console.jpg" 
                linkText="GitHub Repository"
                href="http://github.com"
                revealedText="A full-stack, MERN-based text adventure game and game creator. Utilizes MongoDB/Mongoose, Express Web Server, React front-end, and NodeJS"
                devicon="react"
                />

            <CardReveal
                title="MatrixJS"
                image="./images/matrixJS.jpg" 
                linkText="View on CodePen.io"
                href="https://codepen.io/nchislom/pen/gaKOyR"
                revealedText="A Matrix-inspired console screen written in JS/jQuery"
                devicon="js"
                />

            <CardReveal
                title="Bootstrap Login"
                image="./images/BootstrapLogin.jpg" 
                linkText="View on CodePen.io"
                href="https://codepen.io/nchislom/pen/bVKdQE"
                revealedText="A animated login modal utilizing jQuery and Bootstrap libraries"
                devicon="jq"
                />

            <CardReveal
                title="Responsive Carousel"
                image="./images/ResponsiveCarouselLayout.jpg" 
                linkText="View on CodePen.io"
                href="https://codepen.io/nchislom/pen/PPdPmY"
                revealedText="A animated login modal utilizing jQuery and Bootstrap libraries"
                devicon="jq"
                />

             <CardReveal
                title="Liri Bot App"
                image="./images/nodejs-new-pantone-black.png" 
                linkText="View on GitHub"
                href="https://github.com/nchislom/liri-node-app"
                revealedText="A command-line language interpretation interface leveraging several RESTful APIs for content aggregation"
                devicon="node"
                />

            <CardReveal
                title="MusiMeme"
                image="./images/musimeme.jpg" 
                linkText="Visit on GitHub Pages"
                href="https://nchislom.github.io/Musimeme/"
                revealedText="A music-themed image search and board-maker"
                />

            <CardReveal
                title="O.C.C.O.M!"
                image="./images/occom.jpg" 
                linkText="Visit on GitHub Pages"
                href="https://nchislom.github.io/Word-Guess-Game/"
                revealedText="'Oddities, Conspiracies, and Cryptids...Oh My!' is a paranormal themed word-guess game in the classic style of 'Hangman'"
                devicon="js"
                />

            <CardReveal
                title="Clicky Game"
                image="./images/clickygame.jpg" 
                linkText="Visit on GitHub Pages"
                href="https://nchislom.github.io/clicky-game/"
                revealedText="'Clicky Game' is a D&amp;D themed memory game in which the player will attempt to click on each character card only once. Written in JS/React"
                devicon="react"
                />

            <CardReveal
                title="Dune Trivia"
                image="./images/dunetrivia.jpg" 
                linkText="Visit"
                href="https://nchislom.github.io/TriviaGame/"
                revealedText="A timed trivia game written in Javascript"
                devicon="js"
                />
            
            {/* <CardReveal
                title="Battle of the Old Ones"
                image="./images/office.jpg" 
                linkText="Visit"
                revealedText="Battle of the Old Ones"
                /> */}
        </section>
    )};
};

export default Portfolio;
