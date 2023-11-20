import React,{ useContext } from "react";
import { Langc } from "../MyContexts/LgContext";
import './BtnToggl.css';

export default function BtnToggl() {

    const {togglThem,them} = useContext(Langc);



  return (
    

        <button onClick={togglThem} className={them ? "btn-toggle dark-btn drk" : "btn-toggle drk"}> 
            {them ? "LIGHT" : "DARK"}
        </button>



    
  )
}
