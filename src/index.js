import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import Board from "./Board"
import CountBoard from "./CountBoard"


function App(){
  return(
    <div className="app-container">
      <div className="sideboard welcomeboard">
        <div className="boardtext">Find all pairs</div>
      </div>

      <Board />

      <CountBoard/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);