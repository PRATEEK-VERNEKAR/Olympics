import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './imageMove.css';
import ReactLoading from "react-loading";


import UniCarousel from './UniCarousel';

const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [img,setImg]=useState("");
  const [isloading,setisloading]=useState(true);

  useEffect(()=>{
    setisloading(true);
    setTimeout(() => {
      setisloading(false);
    }, 5000);
  },[])

  const handleCallback=(childimg)=>{
    setImg(childimg);
  }

  const removeZoom=()=>{
    setImg("")
  }

  
  return (
    <>
    {
      isloading?(
        <ReactLoading type="spin" color="#0000FF" className='mx-auto '
                        height={100} width={50} />
      ):
      (


      <div className='carousel-container'>

      <Carousel responsive={responsive} swipeable={false} draggable={false} showDots={true} ssr={true} autoPlaySpeed={1000} keyBoardControl={true} className='mb-5'>
        <UniCarousel parentCallback={handleCallback}/>
        <UniCarousel parentCallback={handleCallback} />
        <UniCarousel parentCallback={handleCallback}/>
        <UniCarousel parentCallback={handleCallback}/>
        <UniCarousel parentCallback={handleCallback}/>
      </Carousel>

      {
        img!==""?
          <div className='popup-img'>
            <span onClick={removeZoom}>&times;</span>
            <img src={img} alt='Img'></img>
          </div>
          :""
      }
      </div>
      )
    }
    </>
  )
}

export default Hero;