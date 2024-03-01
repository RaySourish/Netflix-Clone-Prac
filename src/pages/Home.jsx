import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';



export function Home(){
    const [imageUrls, setImageUrls] = useState([]);
    const [name,setname] =useState([])
    const[like,setLike] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetching the first 20 titles
          const titlesResponse = await axios.get('https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies', {
            params: {
              currentCountry: 'US',
              purchaseCountry: 'US',
              homeCountry: 'US',
              limit: 20 // Increase the limit to 20 titles
            },
            headers: {
              'X-RapidAPI-Key': '25d8033c41msh1e6d16c5a15205fp16a046jsn9f5eb5a85f21',
              'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
          });
  
          console.log(titlesResponse.data); // Logging the response containing the first 20 titles
          const titles = titlesResponse.data;
          // Performing a fetch call for images of a specific movie (e.g., tt0944947)
          const imagesResponse = await axios.get('https://online-movie-database.p.rapidapi.com/title/get-images', {
            params: {
              tconst: {titles}, // Example movie ID
              limit: 1
            },
            headers: {
              'X-RapidAPI-Key': '25d8033c41msh1e6d16c5a15205fp16a046jsn9f5eb5a85f21',
              'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
          });
  
          console.log(imagesResponse.data); // Logging the response containing images data
          
          // Extracting image URLs and saving them in the array
          const movie = imagesResponse.data.images.map(image => image.caption);
          let urls = imagesResponse.data.images.map(image => image.url);
          urls=urls.slice(0,12)
        //   setImageUrls(imageUrls=> urls);
        setname(movie)
        console.log("thiss",name)
        console.log("here",urls);
        setImageUrls(urls);
          console.log("this",imageUrls[0]); // Logging the array of image URLs
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData(); // Call the fetchData function
    }, []);

    const slideLeft = () => {
      var slider = document.getElementById('slider' );
      slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
      var slider = document.getElementById('slider' );
      slider.scrollLeft = slider.scrollLeft + 500;
    };


    return (
<>

<div className="text-white">Popular </div>
    
<div className='relative flex items-center group'>
   
<MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
   
<div
        id='slider'
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>

  {imageUrls.map(urls=>(
    // <div className=" relative w-[200x] h-[160px] p-4 mt-2  " >
    // inline -block here helped me get the images in a line
    <div className='w-[160px] h-[200px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img src={urls} alt="loading" className="object -fit h-full w-full" />
      <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="   text-center py-20 ">Title</p>
      </div>
      
     <div className=" absolute top-4 left-4  text-white " onClick={() => setLike(!like)}>
      {like?<FaHeart/>:<FaRegHeart />}

     </div>
     
    
     </div>
       
    
  ))}
</div>
<MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
</div>
<div className="text-white"> upcoming </div>
      
        <div className="relative flex flex-wrap  items-center inline-block cursor-pointer" id={'slider'} >
  {imageUrls.map(urls=>(
    <div className=" relative w-[200x] h-[160px] p-4 mt-2  " >
      <img src={urls} alt="loading" className="object -fit h-full w-full" />
      <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="   text-center py-20 ">Title</p>
      </div>
    </div>
  ))}
</div>
<div className="text-white"> Horror</div>
   
        <div className="relative flex flex-wrap  items-center inline-block cursor-pointer" id={'slider'} >
  {imageUrls.map(urls=>(
    <div className=" relative w-[200x] h-[160px] p-4 mt-2  " >
      <img src={urls} alt="loading" className="object -fit h-full w-full" />
      <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="   text-center py-20 ">Title</p>
      </div>
    </div>
  ))}
</div>
        </>
    )
}