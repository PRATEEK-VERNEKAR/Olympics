import React,{useState} from 'react'
import styled from 'styled-components';
import './imageMove.css';

import Modal from './Modal';
import photo1 from '../../images/1.jpg';
import photo2 from '../../images/2.jpg';
import photo3 from '../../images/3.jpg';
import photo4 from '../../images/4.jpg';
import photo5 from '../../images/5.jpg';
import photo6 from '../../images/6.jpg';
import photo7 from '../../images/7.jpg';
import photo8 from '../../images/8.jpg';
import photo9 from '../../images/9.jpg';
import photo10 from '../../images/10.jpg';

const imgarr=[photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo9,photo10];

const Text=styled.p`
  display:-webkit-box;
  overflow:hidden;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
  font-size:16px;
  color:brown;
`;


const UniCarousel = ({parentCallback}) => {

  const [click,setclick]=useState(false);
  const [img,setimg]=useState("");

  const handleClick=(phopar)=>{
    // setclick(true);
    // setimg(phopar.target.src);

    parentCallback(phopar);
  }

  let x = Math.floor((Math.random() * 10));
  console.log(x)

  const p=imgarr[x]

  return (
    <>
        <div className='wrapper m-5 flex flex-col border-2 rounded-md' >
            <img src={p} className='object-fill h-80' onClick={()=>{handleClick(p)}} onhover='scale-50'></img>
            <div  className="w-full h-24 p-4 text-md">
                <Text>Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville. He's twiways to improve Binaryville. He's twiways to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twice been awarded the highly coveted BinaryvilleMedallionOfHonorAndExcellentAward</Text>
            </div>
            {/* {
              click? <Modal image={img}></Modal>:""
            } */}
        </div>
    </>
  )
}

export default UniCarousel;