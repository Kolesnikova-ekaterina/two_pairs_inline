import { useState, createContext, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import Board from "./Board"
import CountBoard from "./CountBoard"

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
} 
var cards = Array(16).fill(0).map((_, i) => i>>1  )
shuffle(cards)

function App(){
  
  const [count, setcount] = useState(0)

  const [cardsFlipped, setCardsFlipped] = useState(Array(16).fill("").map((_, i) => "closed"  ))
 
  var setsisopen = Array(16).fill((x)=>{return})

  const boardClickHandler = (cardname, isOpen, setisOpen) =>{
      
      setsisopen[cardname] = setisOpen;
      if (cardsFlipped[cardname]=='found') return ;
      setisOpen(!isOpen);
      let _cardsstates = cardsFlipped.copyWithin()
      _cardsstates[cardname] = isOpen? "close" : "open"
      setCardsFlipped(_cardsstates)
      
      let amountopencard = cardsFlipped.filter(x=>x=="open").length
      if (amountopencard == 2){
        let id1 = cardsFlipped.indexOf("open")
        let id2 = cardsFlipped.indexOf("open", id1+1 )

        if (cards[id1]==cards[id2])
          {
            let _cardsstates = cardsFlipped.copyWithin()
            _cardsstates[id1] = _cardsstates[id2] = "found"
            setCardsFlipped(_cardsstates)
          }
        else
          {
            
            
          }

      }

      if(amountopencard==3){
        let id1 = cardsFlipped.indexOf("open")
        let id2 = cardsFlipped.indexOf("open", id1+1 )
        let id3 = cardsFlipped.indexOf("open", id2+1 )
        if (id1==cardname)
          {
            let _temp = id1
            id1 = id3
            id3 = _temp
          }
        if (id2==cardname)
        {
          let _temp = id2
          id2 = id3
          id3 = _temp
        }

        setsisopen[id1](false);
        setsisopen[id2](false);
        let _cardsstates = cardsFlipped.copyWithin()
        _cardsstates[id1] = _cardsstates[id2] = "close"
        setCardsFlipped(_cardsstates)

      }

      let amountfoundcard = cardsFlipped.filter(x=>x=="found").length / 2
      setcount(amountfoundcard)
      
  }

  return(
    <div className="app-container">
      <div className="sideboard welcomeboard">
        <div className="boardtext">Find all pairs</div>
      </div>

      <Board cards={cards} onClick={boardClickHandler} />

      <CountBoard count ={count} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);