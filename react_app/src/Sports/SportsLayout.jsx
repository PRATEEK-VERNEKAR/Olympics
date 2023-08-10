import React, { useEffect } from 'react';
import axios from 'axios';
import {useState} from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';


import { useNavigate } from 'react-router-dom';


const useGetSports = () => {
  const [sports, setsports] = useState([]);
  const [photoModules, setPhotoModules] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getsports");
        const data=response.data;
        setsports(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const importPhotos = async () => {
      const photoModuleArray = await Promise.all(
        Array.from({ length: 52 }, (_, index) =>
          import(`../images/${index + 1}.jpg`)
        )
      );
      setPhotoModules(photoModuleArray);
    };

    importPhotos();

  }, []);

  return [sports,photoModules];
};

const Text=styled.p`
  display:-webkit-box;
  overflow:hidden;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
`;


const ExampleComponent = () => {
  const navigate=useNavigate();


  const [SportsArray,photoModules] = useGetSports();



  // useEffect(() => {
  //   const importPhotos = async () => {
  //     const photoModuleArray = await Promise.all(
  //       Array.from({ length: 52 }, (_, index) =>
  //         import(`../images/${index + 1}.jpg`)
  //       )
  //     );
  //     setPhotoModules(photoModuleArray);
  //   };
  //   importPhotos();
  // }, []);

  const handleClick=()=>{
    navigate('/sportarticle');
  }

  console.log(SportsArray)
  
  return (
    <>
      <div className='flex justify-between my-2 pb-2 border-b-2'>
        <div className='w-3/5 flex justify-between'>
          <div className='w-2/3 text-xl'>
            <Typewriter
              options={{
                strings: ['Virat Kohli is the Greatest Batsman', 'No one even comes near him in this matter'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className='w-1/3 text-center text-2xl tracking-wide font-bold'>Sports</div>
        </div>
          
        <div  className='text-xl'>
          <Typewriter
            options={{
              strings: ['Virat Kohli is the Greatest Batsman', 'No one even comes near him in this matter'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>


      <div className='grid grid-cols-2 gap-y-2'>
      {SportsArray.map((item,index) => (
        

          <div key={item._id} onClick={handleClick}>
            <div className='sportswrapper m-5 flex flex-col border-2 rounded-xl shadow-xl hover:cursor-pointer hover:bg-slate-100' >
              <img src={photoModules[index].default} className='object-fill h-80 rounded-t-xl shadow-2xl' ></img>
              <h1 className='text-center text-xl p-5'>{item.Sports.toUpperCase()}</h1>
              <div  className="w-full h-24 p-4 text-md">
                <Text>Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville. He's twiways to improve Binaryville. He's twiways to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twice been awarded the highly coveted BinaryvilleMedallionOfHonorAndExcellentAward</Text>
              </div>
            </div>
          </div>
      ))}
      </div>
    </>
  );
};

export default ExampleComponent;
