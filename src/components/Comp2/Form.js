import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';
import './form.css';


export default function Form() {
  /*********** Tableau des taches ***************/

  const [dataArr,setDataArr]=useState([
    {txt:'Sport',id:uuidv4(),completed:false},
    {txt:'Coder',id:uuidv4(),completed:false},
    
    ])

/***********input***************/
const [valtxt,setvaltxt]=useState('');

const modifytext=(e)=>{
  setvaltxt(e.target.value);
  console.log(valtxt);
}

/***********Add Task***************/

const addTodo = (e) => {        
  e.preventDefault();

  const newArr = [...dataArr]
  const newTod={}
  newTod.txt = valtxt
  newArr.push(newTod)
  setDataArr(newArr)
  setvaltxt('')
} 

/***********Delete Task***************/

const DeleteEleme = (id) => {
  const newArr = dataArr.filter(el => el.id !== id);
  setDataArr(newArr);
}

/***********fonction toggleTodo ***************/

const toggleTodo = (id) =>{
  const newArr = dataArr.map((item) =>{
    if (item.id === id){
      return {...item, completed: !item.completed}
    }
    return item;
  });
  setDataArr(newArr)
}

  return (
    <div className='m-auto px-4 col-12 col-sm-10 col-lg-6 nw'>
      
          <form onSubmit={e => addTodo(e)} className='mb-3'>
            <label className=''><i><h2 className="fw-2">Add Task: </h2></i></label><br />
            <input type="text" placeholder="Ajouter une Tache" className="inptach" id="todo" value={valtxt} onChange={(e) => modifytext(e)}/>

            <button className="mt-2 btn btn-primary d-block" style={{"width":"150px","borderRadius":"22px","fontSize":"18px","backgroundColor":"green","fontWeight":"bold"}}>Ajouter</button>
          </form>

      <ul>
        {
          dataArr.map(el => {
            return <Item txt={el.txt}
            key={el.id}
            completed={el.completed}
            delFunc={ () =>DeleteEleme(el.id)}
            toggleTodo={() => toggleTodo(el.id)}
            />
          })
        }
      </ul>





    </div>
  );
}
