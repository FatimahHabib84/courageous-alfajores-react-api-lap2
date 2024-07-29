import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Card(props) {
  
  return (
    <Link to={`/info/${props.id}`} >
    <div className='flex flex-col shadow-md shadow-black rounded-lg m-2 bg-white max-sm:col-span-3 p-2 gap-2'>
         <img className='w-2/3 m-auto rounded-lg' src={props.image}/>
         <p className='text-center font-bold'>{props.name}</p>
         <button className='px-8 py-1 font-bold text-l text-white bg-indigo-800 hover:bg-indigo-900 w-1/2 m-auto rounded-lg'
         onClick={()=>{props.deleteCharacter(props.id)}}>Delete</button>
    </div>
    </Link>
  )
}
