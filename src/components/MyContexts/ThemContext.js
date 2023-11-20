import React, {createContext, useState} from 'react';

//1-objet context
export const ThemCont=createContext();




//2-component context
export default function ThemContext({childern}) {

    const [them,setThem] = useState(false);

    const togglThem = () =>{
        setThem(!them)
    }

    if(them){
        document.body.classList.add("dark-body");
    }
    else{
        document.body.classList.remove("dark-body");
    }
  return (
    <ThemCont.Provider value={{togglThem,them}}>
        {childern}
    </ThemCont.Provider>
  )
}
