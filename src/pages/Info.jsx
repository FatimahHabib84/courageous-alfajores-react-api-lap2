import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../component/Nav'
import '../App.css'
import { Link } from 'react-router-dom'

function Info() {
    const params = useParams()
    let id = params.id

    
    const [data, setData] = useState([])

    useEffect(() => {
      axios.get(`https://66607b995425580055b41c4e.mockapi.io/character/${id}`)
      .then(function(res){
        console.log('id is '+id);
        console.log(res.data);
        setData(res.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    
    }, [])
  return (
    <div className='w-screen h-screen flex flex-col items-center mt-0'>
        <Nav/>

        <h1 className='max-sm:col-span-3 col-span-3 font-bold text-xl text-center text-indigo-900 my-8'>My Sweet Characters</h1>
       <div className='w-1/2 max-sm:w-full bg-indigo-50 p-8 rounded-lg shadow-lg shadow-indigo-950 flex flex-col gap-2 justify-center items-center justify-self-center'>
        <img src={data.image} alt={data.name} />
        <p className='font-bold text-indigo-800'>Character name: {data.name}</p>
        <p className='font-bold text-indigo-800'>Hair color: {data.hair}</p>
        <p className='font-bold text-indigo-800'>Character status: {data.status}</p>
        <p className='font-bold text-indigo-800'>Character species: {data.species}</p>
        <p className='font-bold text-indigo-800'>Character gender: {data.gender}</p> 
        <Link to={'/'}><p className='font-bold justify-self-start self-start px-8 py-1 text-l text-white bg-indigo-800 hover:bg-indigo-900 m-auto rounded-lg mt-2'>Back</p></Link>
        </div>
    </div>
  )
}

export default Info