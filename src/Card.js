import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"


function Card(props){
  const [isOpen, setisOpen] = useState(false);
  return(
    <>
    <img src={isOpen ? require(`./cards/${props.cardname}.jpg`) : require("./cards/shirt.jpg") } onClick={() => {
      setisOpen(!isOpen);

      }}></img>
    </>

  )

}

export default Card;