import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

    console.log(CountriesArray)
    return (
      <div>
        <div className=''>
        {CountriesArray.map((item) => (
            <div key={item.id}>
              <div className='wrapper m-5 grid grid-cols-4 border-2 rounded-md' >
                <h1 className='text-center'>{item.region}</h1>
                <h1 className='text-center'>{item.Gold}</h1>
                <h1 className='text-center'>{item.Silver}</h1>
                <h1 className='text-center'>{item.Bronze}</h1>

              </div>
            </div>
        ))}
        </div>
      </div>
    );
}

export default CountriesLayout