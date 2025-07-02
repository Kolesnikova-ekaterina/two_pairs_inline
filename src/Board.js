import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import Card from "./Card"

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export const CardContext = createContext();

function Board() {
  const [user, setUser] = useState("Jesse Hall");

  var cards = Array(16).fill(0).map((_, i) => i>>1  )
  var cardsStates = Array(16).fill("").map((_, i) => "closed"  )
  //alert(cards)
  shuffle(cards)

  return (
    <CardContext.Provider value={{cards: cards , cardsStates: cardsStates} }>
        
    <div className="table-container">
      <table className= "center-table">
        <tbody>
          <tr>
            <td><Card cardname={cards[0].toString()} /></td>
            <td><Card cardname={cards[1].toString()}  /></td>
            <td><Card cardname={cards[2].toString()}  /></td>
            <td><Card cardname={cards[3].toString()} /></td>
          </tr>
          <tr>
            <td><Card cardname={cards[4].toString()} /></td>
            <td><Card cardname={cards[5].toString()}  /></td>
            <td><Card cardname={cards[6].toString()}  /></td>
            <td><Card cardname={cards[7].toString()} /></td>
          </tr>
          <tr>
            <td><Card cardname={cards[8].toString()} /></td>
            <td><Card cardname={cards[9].toString()}  /></td>
            <td><Card cardname={cards[10].toString()}  /></td>
            <td><Card cardname={cards[11].toString()} /></td>
          </tr>
          
          <tr>
            <td><Card cardname={cards[12].toString()} /></td>
            <td><Card cardname={cards[13].toString()}  /></td>
            <td><Card cardname={cards[14].toString()}  /></td>
            <td><Card cardname={cards[15].toString()} /></td>
          </tr>
        </tbody>
    </table>
  </div>
  </CardContext.Provider>
  );
}

export default Board;