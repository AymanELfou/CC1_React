import React, { useContext } from 'react';
import { Langc } from '../MyContexts/LgContext';
import data from '../assets/data';


export default function Cmptxt() {

    const {lg} =useContext(Langc);


  return (
    <div className='container text-center mt-2'>

        <h1>{data[lg].title}</h1>
        <p>{data[lg].txt}</p>
        
    </div>
  )
}
