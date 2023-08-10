import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from '../img/dummy.jpg'
import "../App.css"
const useGetCountry = () => {
    const [country, setcountry] = React.useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8000/getcountries");
          const data=response.data;
          setcountry(data);
  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      console.log('Updated sports state:', country);
    }, [country]);
  
    return country;
};


const CountriesLayout = () => {
  const CountriesArray = useGetCountry();
  const navigate=useNavigate();
  const [clicked,setclicked]=useState(false);
  
  const removeZoom=()=>{
    setclicked("")
  }
    console.log(CountriesArray)
    return (
      <div className='carousel-container'>
        {CountriesArray.map((item,index) => (
          <div>
            <div className='grid grid-cols-2 gap-x-0.5' >
            {
              index%2===0?(
                <h1 onClick={()=>{setclicked(true)}} className='text-center border-2 rounded-md py-2 text-2xl'>{item.region}</h1>
              ):
              (
                <h1 onClick={()=>{setclicked(true)}} className='col-start-2 text-center border-2 rounded-md py-2 text-2xl'>{item.region}</h1>
              )
            }
            </div>
          </div>
        ))}

        {
          clicked?(
            <div className='popup-img'>
            <span onClick={removeZoom}>&times;</span>
            <img src={img} alt='Img'></img>
          </div>
          ):
          (
            ""
          )
        }


      </div>
    );
}

export default CountriesLayout;

