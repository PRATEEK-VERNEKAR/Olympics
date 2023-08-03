import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favourites = () => {
	const navigate=useNavigate();
	const [tab1,settab1]=useState(true);
	const [tab2,settab2]=useState(true);
	const [tab3,settab3]=useState(false);
	const [currceleb,setcurrceleb]=useState([{fname:"",lname:'',email:''}])
	const [disimg,setdisimg]=useState([{img:"",_id:""}]);
	const [allcelebs,setallcelebs]=useState([{fname:'',lname:'',email:''}]);
	const [celebfollowers,setcelebfollowers]=useState(0);
	const [celebfollowings,setcelebfollowings]=useState(0);
	const [followings,setfollowings]=useState([{fname:"",lname:'',email:''}]);

	useEffect(()=>{
		async function fetchData() {
      try{
        const token=localStorage.getItem('token');

        const res=await fetch('http://localhost:8000/protected',{
          method:"GET",
          headers:{
              Accept:'application/json',                  //While taking cookies
              Authorization:token,
              "Content-Type":'application/json'
          },
          credentials:"include"                   //While taking JWT Token
      })
        console.log(res);
        console.log("ata pa")
        if(res.status===401){
          throw new Error("Login first bro");
        }
		else{
			try{

				const email=localStorage.getItem('Email');
				console.log(email)
				const favres=await axios.get(`http://localhost:8000/followingfan?email=${email}`);
				console.log(favres.data.followings);
				if(favres.data.followings!==undefined){
					setfollowings([...favres.data.followings])
				}

				const allcelebs=await axios.get(`http://localhost:8000/getallforfan?myemail=${email}`);
				console.log(allcelebs.data);
				setallcelebs(allcelebs.data);
			}
			catch(err){
				console.log("Some bug fetching followings");
			}
		}
      }
      catch(err){
        toast("Please login first");
        console.log(err);
        navigate('/login');
      }
    }
    fetchData();
	},[])

	const showFavCeleb=async (email)=>{
    try{
      console.log(email);
      const res=await axios.get(`http://localhost:8000/getimages?email=${email}`);
      console.log(res.data[0]);
      setdisimg(res.data[0].images)
      setcelebfollowers(res.data[0].followers);
      setcelebfollowings(res.data[0].followings.length);
    }
    catch(err){
      console.log(err);
    }
  }

	const showallCelebs=async()=>{
		try{
			const email=localStorage.getItem('Email')
			const allcelebs=await axios.get(`http://localhost:8000/getallforfan?myemail=${email}`);
			console.log(allcelebs.data);
			setallcelebs(allcelebs.data);

		}
		catch(err){
			console.log(err);
		}
	}

	const startFollowing=async(email)=>{
		console.log("HEKLJKLDJLKDJDKJDLK")
		try{
		  const myemail=localStorage.getItem('Email');
	
		  const res=await axios.post(`http://localhost:8000/fanstartfollowing?email`,{email:email,myemail:myemail});
		  
		  console.log(res);
	
		  window.location.reload();
	
	
		}
		catch(err){
		  console.log(err);
		}
	  }
	
		return (
		<>
			<form className="flex" style={{height:"40rem"}}>
				<div className="w-1/2 text-center bg-slate-200 border-2 border-red-500">        
        <div className="h-1/6 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex justify-evenly flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="mr-2">
                    <button onClick={(e)=>{e.preventDefault()
                                          settab1(true)
                                          showFavCeleb(currceleb.email)
                                          }}
																					className={(tab1?"active inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group":"inline-flex items-center justify-center p-4 text-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group")} aria-current="page"
                        >
                        <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>Photos
                    </button>
                </li>
                <li className="mr-2">
                    <button onClick={(e)=>{e.preventDefault()
                                          settab1(false)}}
																					className={(tab1?"inline-flex items-center justify-center p-4 text-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500 group":"active inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group")}

                        >
                        <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                        </svg>About
                    </button>
                </li>
            </ul>
        </div>

				
				{
					tab1?(
						<div className="h-4/6 overflow-y-scroll">
								{
									disimg.map((ele)=>{
										return(
											<img src={ele.img} key={ele._id} className="p-5 mx-auto h-72"></img>
										)
									})
								}
						</div>
					):
					(
						<div className="h-4/6 overflow-y-scroll flex flex-col justify-center items-center">
							<span className='bg-blue-200 border-2 border-black text-2xl rounded-2xl my-3 p-2'>Followers = {celebfollowers}</span>
							<span className='bg-blue-200 border-2 border-black text-2xl rounded-2xl my-3 p-2'>Followings = {celebfollowings}</span>
						</div>
					)
				}

				{
					tab3?(
						<div className="h-1/6 border-b border-gray-200 dark:border-gray-700">
						<button className='bg-blue-200 border-2 border-black text-2xl mt-2 py-1 px-2' 
						onClick={(e)=>{e.preventDefault()
										startFollowing(currceleb.email)}}
						>Follow</button>
						</div>
					):
					(
						<></>
					)
				}

				
      </div>

			<div  className="w-1/2 border-2 border-red-500">
				<div className='h-1/6 text-center'>
					<button className='bg-blue-200 border-2 border-black text-2xl mt-2 py-1 px-2'
					onClick={(e)=>{e.preventDefault()
								    settab2(true)
									settab3(false)
									}}>Followings</button>
				</div>

				{
					tab2?(
						<div className='h-4/6 overflow-y-scroll border-2 border-green-400'>
						{
							followings.map((ele)=>{
								return(
									<div onClick={()=>{settab1(true);
														setcurrceleb(ele)
														showFavCeleb(currceleb.email)}} 
										className='flex justify-center px-1 my-1 mx-2 text-xl rounded-2xl border-2'>
										<span className=''>{ele.fname}</span>
										<span>&nbsp;&nbsp;&nbsp;</span>
										<span className=''>{ele.lname}</span>
									</div>
								)
							})
						}
						</div>
					):
					(
						<div className='h-4/6 overflow-y-scroll border-2 border-green-400'>
						{
							allcelebs.map((ele)=>{
								return(
									<div onClick={()=>{settab1(true)
														setcurrceleb(ele)
														showFavCeleb(currceleb.email)}}
										className='flex justify-center px-1 my-1 mx-2 text-xl rounded-2xl border-2'>
										<span className=''>{ele.fname}</span>
										<span>&nbsp;&nbsp;&nbsp;</span>
										<span className=''>{ele.lname}</span>
									</div>
								)
							})
						}
						</div>
					)
				}
					
				<div className='h-1/6 text-center'>
					<button className='bg-blue-200 border-2 border-black text-2xl mt-2 py-1 px-2'
									onClick={(e)=>{e.preventDefault()
											settab2(false)
											settab3(true)
											showallCelebs()}}>Celebs</button>
				</div>
			</div>
			</form>
		</>

)}

export default Favourites;