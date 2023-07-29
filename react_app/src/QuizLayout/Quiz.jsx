import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Quiz = () => {
  const [quesArr,setquesArr]=useState([  {
    "questionNo": 0,
    "question": "",
    "options": [" ", " ", " ", " "],
    "answer": " "
  }]);
  const [tab,settab]=useState(0);
  const [currindex,setcurrindex]=useState(0);
  const [score,setscore]=useState(0);
  const [selected,setselected]=useState('');
  const [showSubmit,setshowSubmit]=useState(false);
  
  const navigate=useNavigate();
  useEffect( ()=>{
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
      }
      catch(err){
        console.log(err);
        navigate('/login');
      }
    }
    fetchData();
  },[])

  const startquiz=async()=>{
    try{
      const questions=await axios.get('http://localhost:8000/getQuestions');
      console.log(questions.data);
      setquesArr(questions.data);
    }
    catch(err){
      console.log(err);
    }
  }

  const onSelect=(curr)=>{
    if(!document.querySelector(`.li${curr}`).style.border){

      setselected(quesArr[currindex].options[curr])
      document.querySelector(`.li0`).style.border=null
      document.querySelector(`.li1`).style.border=null
      document.querySelector(`.li2`).style.border=null
      document.querySelector(`.li3`).style.border=null
      document.querySelector(`.li${curr}`).style.border="thick solid yellow"
    }
    else{
      setselected('');
      document.querySelector(`.li${curr}`).style.border=null
    }

  }

  const deselect=()=>{
    document.querySelector(`.li0`).style.border=null
    document.querySelector(`.li1`).style.border=null
    document.querySelector(`.li2`).style.border=null
    document.querySelector(`.li3`).style.border=null
  }

  const checkAns=()=>{
    if(quesArr[currindex].answer===selected){
      setscore(score+1)
    }
    setselected('');
  }

  const showAns=()=>{

  }

  return (
    <>
    {
      tab===0?(
        <div className='w-full h-80 mb-4 flex justify-center items-center bg-blue-300'>
          <button onClick={(e)=>{e.preventDefault()
                                settab(1)
                                startquiz()
          }} className='text-4xl border-4 border-green-500 p-2 rounded-2xl hover:bg-red-400'
          >Start Quiz</button>
        </div>
      ):
      (tab===1?(
      <div>
          <div className="w-1/3  mx-auto my-5 bg-stone-200 rounded-lg shadow-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Question&nbsp;{currindex+1}</h2>
            <p className="text-gray-800 mb-4">{quesArr[currindex].question}</p>
            <ul className="space-y-2">
              <li onClick={()=>{onSelect(0)}}
               className="li0 bg-blue-500 text-white rounded-md py-2 px-4 cursor-pointer hover:bg-blue-600">{quesArr[currindex].options[0]}</li>
              <li onClick={()=>{onSelect(1)}}
               className="li1 bg-blue-500 text-white rounded-md py-2 px-4 cursor-pointer hover:bg-blue-600">{quesArr[currindex].options[1]}</li>
              <li onClick={()=>{onSelect(2)}}
               className="li2 bg-blue-500 text-white rounded-md py-2 px-4 cursor-pointer hover:bg-blue-600">{quesArr[currindex].options[2]}</li>
              <li onClick={()=>{onSelect(3)}}
               className="li3 bg-blue-500 text-white rounded-md py-2 px-4 cursor-pointer hover:bg-blue-600">{quesArr[currindex].options[3]}</li>
            </ul>

          <div className='text-center mt-2'>
            <button className='rounded-md px-2 m-2 border-2 border-blue-600 hover:bg-red-600'>Stop</button>
            <button onClick={(e)=>{
              e.preventDefault()
              if(currindex!==0){
                setcurrindex(currindex-1)
              }
              if(currindex!=9){
                setshowSubmit(false)
              }
            }} className='rounded-md px-2 m-2 border-2 border-blue-600 hover:bg-yellow-500'>Back</button>
            {
              showSubmit?(
                <button onClick={(e)=>{
                  e.preventDefault();
                  showAns()
                  settab(2)
                }} className='rounded-md px-2 m-2 border-2 border-blue-600 hover:bg-green-500'>Submit</button>
              ):
              (
                <button onClick={(e)=>{
                  e.preventDefault()
                  checkAns()
                  deselect()
                  if(currindex!=8){
                    setcurrindex(currindex+1)
                  }
                  else{
                    setshowSubmit(true);
                  }
                }}
                className='rounded-md px-2 m-2 border-2 border-blue-600 hover:bg-green-400'>Next</button>
              )
            }
          </div>
          </div>
      </div>
      ):
      (
        <div className='w-full h-80 mb-4 flex justify-center items-center bg-blue-300 '>
          <div className='flex flex-col gap-y-2 justify-center items-center shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'>

            <div className='text-2xl px-3 py-1 '>Congralations</div>
            <div className='text-2xl px-3 py-1 '>Your Score</div>
            <div className='text-2xl px-3 py-1 '>{score}</div>
          </div>
        </div>
      )
      )
    }

    </>
  )
}

export default Quiz;