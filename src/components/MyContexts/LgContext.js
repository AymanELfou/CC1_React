import React, {createContext, useState} from 'react';

export const Langc=createContext();


export default function LgContext({children}) {

    const [lg,setLg]=useState('FR')

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
    <Langc.Provider value={{lg,setLg,them,togglThem}}>
        {children}
    </Langc.Provider>
  )
}
