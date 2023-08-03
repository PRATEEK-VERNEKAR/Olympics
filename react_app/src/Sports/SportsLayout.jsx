import React, { useEffect } from 'react';
import axios from 'axios';
import {useState} from 'react';
import styled from 'styled-components';


import { useNavigate } from 'react-router-dom';


const useGetSports = (setPhotoModules) => {
  const [sports, setsports] = React.useState([]);

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

  return sports;
};

const Text=styled.p`
  display:-webkit-box;
  overflow:hidden;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
`;


const ExampleComponent = () => {
  const navigate=useNavigate();

  const [photoModules, setPhotoModules] = useState([]);

  const SportsArray = useGetSports(setPhotoModules);



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
    <div>
      <div className='grid grid-cols-2 gap-y-2'>
      {SportsArray.map((item,index) => (
        

          <div key={item.id} onClick={handleClick}>
            <div className='wrapper m-5 flex flex-col border-2 rounded-md' >
              <img src={photoModules[index].default} className='object-fill h-80' ></img>
              <h1 className='text-center text-xl p-5'>{item.Sports}</h1>
              <div  className="w-full h-24 p-4 text-md">
                <Text>Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville. He's twiways to improve Binaryville. He's twiways to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twice been awarded the highly coveted BinaryvilleMedallionOfHonorAndExcellentAward</Text>
              </div>
            </div>
          </div>
      ))}
      </div>
    </div>
  );
};

export default ExampleComponent;
