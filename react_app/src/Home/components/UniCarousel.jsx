import React,{useState} from 'react'
import styled from 'styled-components';
import './imageMove.css';

import Modal from './Modal';
import photo from '../../img/dummy.jpg';

const Text=styled.p`
  display:-webkit-box;
  overflow:hidden;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
`;


const UniCarousel = ({parentCallback}) => {

  const [click,setclick]=useState(false);
  const [img,setimg]=useState("");

  const handleClick=(phopar)=>{
    // setclick(true);
    // setimg(phopar.target.src);

    parentCallback(phopar);
  }

  return (
    <>
        <div className='wrapper m-5 flex flex-col border-2 rounded-md' >
            <img src={photo} className='object-fill h-80' onClick={()=>{handleClick(photo)}} onhover='scale-50'></img>
            {/* <div  className="w-full h-24 p-4 text-md">
              <Text>Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville. He's twiways to improve Binaryville. He's twiways to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twice been awarded the highly coveted BinaryvilleMedallionOfHonorAndExcellentAward</Text>
            </div>
            {
              click? <Modal image={img}></Modal>:""
            } */}
        </div>
    </>
  )
}

export default UniCarousel;