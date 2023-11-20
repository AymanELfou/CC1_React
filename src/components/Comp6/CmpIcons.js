import React, { useContext } from 'react';
import { Langc } from '../MyContexts/LgContext';

import imgfr from'../assets/france.svg';
import imgsp from '../assets/spain.svg';
import imgeg from '../assets/united-kingdom.svg';



export default function CmpIcons() {

    const {setLg} =useContext(Langc);

    
  return (
    <div className='container text-center'>
        <img onClick={() => setLg('FR')} src={imgfr} style={{"width":"70px","height":"70px","padding":"10px"}} alt="" />
        <img onClick={() => setLg('ES')} src={imgsp} alt="" style={{"width":"70px","height":"70px","padding":"10px"}} />
        <img onClick={() => setLg('EN')} src={imgeg} alt="" style={{"width":"70px","height":"70px","padding":"10px"}} />
    </div>
  )
}
