import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import pic from '../assets/pic.png'
import { Home } from './Home';
export function Main() {

  // const [img,setImg] = useState("");


  let movie;

  // useEffect(() => {
  //   async function fetchData() {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://online-movie-database.p.rapidapi.com/title/get-details',
  //       params: { tconst: `tt0944939` },
  //       headers: {
  //         'X-RapidAPI-Key': 'acd6b8c0c3mshb568300a12576c9p1e3379jsn17995154e51f',
  //         'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       movie=response.data
  //       console.log(response.data);

  //       // console.log(movie.results[0].image)
  //       setImg(movie.image.id)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchData(); // Call the async function inside useEffect
  // }, []);


  console.log(`tt${Math.floor(Math.random()*10000000)}`)
  
  
    return (
      <>

      <div className='w-full h-[550px] text-white'>
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img src={pic} alt="Loading" className=' object-cover  h-full w-full' />

        </div>
        <div className='absolute w-full top-[30%]'>
        <div>
          <h1 className='text-white text-3xl m-2 font-bold'>John Wick</h1>
        </div>
          <div>
          <button className='border  border-gray-300 text-black bg-gray-300 px-8 py-2 mx-2 rounded-sm '>Play</button>
          <button className='border border-gray-300 text-white py-2 px-4 m-2 '>Watch Later</button>
          </div>
          
          <div className='text-white xl w-[30%] m-2'>
            <p className='text-gray-500'>Released Date : 2024</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab eveniet aspernatur maxime veritatis fuga asperiores hic modi culpa ipsa.</p>
          </div>
        </div>
        </div>
      <Home/>
       
    
        {/* <div className='text-xl'>signup</div> */}
        </>
    )
}

