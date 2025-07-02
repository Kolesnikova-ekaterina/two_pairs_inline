import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"


function CountBoard(props){
  
  return(
    <div className="customlist">
    <div className="sideboard countboard">
        Found paires: {props.count}
      </div>
     
      <div className="sideboard countboard">
        {props.count == 8 ? "WIN":""}
      </div>
    </div>
  )

}

export default CountBoard;