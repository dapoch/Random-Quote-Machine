import React, {useState} from "react"
import './App.scss';
import { quotes } from "./Quotes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



function App() {
  
  let randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
  const [cita, setCita] = useState("Esto es un generador aleatorio de citas de canciones de los Redonditos de Ricota")
  const [author, setAuthor] = useState("By daP0ch")
  const [randomColor, setRandomColor] = useState(randomcolor)

  const changeQuoteAndAuthor = ()=> {
    let randomnum = Math.floor(Math.random() * (quotes.length));
    
    setCita(quotes[randomnum].quote);
    setAuthor(quotes[randomnum].author);
    setRandomColor(randomcolor);

  }
  return (
    <div className="App">
      <div className="App-header" style={{backgroundColor: randomColor}}>
        <h1 id="titulo">Random Quote Machine</h1>
        <div id="quote-box">
        <p id="text" style={{color: randomColor}}>
          "{cita}"
        </p>
        <p id="author" style={{color: randomColor}}>
          - {author}
        </p>
        
        <button id="new-quote" style={{backgroundColor: randomColor}}
          onClick={
            ()=>{
            changeQuoteAndAuthor()
        }
      }
         >
            Change Quote
        </button>
        <a id="tweet-quote" rel="noreferrer" target="_blank" href={`http://www.twitter.com/intent/tweet?text= ${cita} - ${author}`}>
          <FontAwesomeIcon icon={faTwitter} style={{color: randomColor}} />
        </a>
        
        </div>
       </div>
      </div>
  );
}

export default App;
