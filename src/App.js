import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";


var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const quotes = [
  {
       quote:"Life isn’t about getting and having, it’s about giving and being.",author:"Kevin Kruse"},
  {
       quote:"Whatever the mind of man can conceive and believe, it can achieve.",author:"Napoleon Hill"},
  {
       quote:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},
  {
       quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",author:"Robert Frost"},
  {
       quote:"I attribute my success to this: I never gave or took any excuse.",author:"Florence Nightingale"},
  {
       quote:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},
  {
       quote:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",author:"Michael Jordan"},
  {
       quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",author:"Amelia Earhart"},
  {
       quote:"Every strike brings me closer to the next home run.",author:"Babe Ruth"}
]


let quotIndex =Math.floor(Math.random()*quotes.length)
let colIndex = Math.floor(Math.random()*colors.length)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color:colors[colIndex],
      Quote:quotes[quotIndex],
    }
    this.handleClick = this.handleClick.bind(this);
    }
  handleClick(){
    this.setState({
      color:colors[Math.floor(Math.random()*quotes.length)],
      Quote:quotes[Math.floor(Math.random()*quotes.length)],
    })
  }

  render(props){
    return (
      <div  className="app">
      <div id='container' className="row d-flex justify-content-center align-items-center" style={{'backgroundColor':this.state.color}}>
        <div id ="quote-box" className="col-lg-5 col-md-6 col-sm-8">
          <div id="text" className="" style={{"color": this.state.color }}>
          <p>
              <FontAwesomeIcon icon={faQuoteLeft} />
              
                {" "+this.state.Quote.quote+" "}
              
              <FontAwesomeIcon icon={faQuoteRight} /> 
              </p>
          </div>
          <div id="author" className='col-sm-12'> 
            <p  className="author" >-{this.state.Quote.author}</p>
          </div>
          <div className= 'row' id="g">

            <div className="col-sm-6 col-xs-12" id= 'a'>
              <a id="tweet-quote" className="btn btn-default" style={{'backgroundColor':this.state.color}} href="https://twitter.com/intent/tweet">
                <FontAwesomeIcon icon={faTwitter}/> 
              </a>
              <a id="tumblr-quote" className="btn btn-default" style={{'backgroundColor':this.state.color}} href="https://www.tumblr.com/explore/text">
                <FontAwesomeIcon icon={faTumblr}/>   
              </a>
            </div>
            <div className="col-sm-6" id= 'c'>
              <button className="btn btn-default" id='new-quote' style={{'backgroundColor':this.state.color}}  onClick={this.handleClick}>
                New Quote
              </button>
            </div>

          </div>
        </div>
        </div>
        <div className="row d-flex justify-content-center" style={{'backgroundColor':this.state.color,"textAlign":"center"}} id='copyright'>
            © 2020 Copyright:
          <a id="footer" href="https://github.com/messaismael" target='blank'> 
            by Ismael
          </a>
        </div>
      </div>
    );
  }
  
}

export default App;
