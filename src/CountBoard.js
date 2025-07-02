import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"


function CountBoard(){
  const [count, setcount] = useState(0);
  
  return(
    <div className="sideboard countboard">
        Found paires: {count}
      </div>
  )

}

export default CountBoard;