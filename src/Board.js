import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import Card from "./Card"



//export const CardContext = createContext();

function Board(props) {
  

  
  //var cardsStates = Array(16).fill("").map((_, i) => "closed"  )
  //alert(cards)
  var cards = props.cards
 

  return (
     
    <div className="table-container">
      <table className= "center-table">
        <tbody>
          <tr>
            <td><Card cardname={cards[0].toString()} cardid="0" onClick={props.onClick} /></td>
            <td><Card cardname={cards[1].toString()} cardid="1" onClick={props.onClick} /></td>
            <td><Card cardname={cards[2].toString()} cardid="2" onClick={props.onClick} /></td>
            <td><Card cardname={cards[3].toString()} cardid="3" onClick={props.onClick} /></td>
          </tr>
          <tr>
            <td><Card cardname={cards[4].toString()} cardid="4" onClick={props.onClick} /></td>
            <td><Card cardname={cards[5].toString()} cardid="5" onClick={props.onClick} /></td>
            <td><Card cardname={cards[6].toString()} cardid="6" onClick={props.onClick} /></td>
            <td><Card cardname={cards[7].toString()} cardid="7" onClick={props.onClick} /></td>
          </tr>
          <tr>
            <td><Card cardname={cards[8].toString()} cardid="8" onClick={props.onClick} /></td>
            <td><Card cardname={cards[9].toString()} cardid="9" onClick={props.onClick} /></td>
            <td><Card cardname={cards[10].toString()} cardid="10" onClick={props.onClick} /></td>
            <td><Card cardname={cards[11].toString()} cardid="11" onClick={props.onClick} /></td>
          </tr>
          
          <tr>
            <td><Card cardname={cards[12].toString()} cardid="12" onClick={props.onClick} /></td>
            <td><Card cardname={cards[13].toString()} cardid="13" onClick={props.onClick} /></td>
            <td><Card cardname={cards[14].toString()} cardid="14" onClick={props.onClick} /></td>
            <td><Card cardname={cards[15].toString()} cardid="15" onClick={props.onClick} /></td>
          </tr>
        </tbody>
    </table>
  </div>
  );
}

export default Board;