import React,{useState,useEffect} from 'react';
import Info from './Info'
import TopFive from './TopFive'
import axios from 'axios';
import middleFlinger from '../src/finger.png'
import './App.css';

function App() {
  
  const [centerDivClass,setCenterDivClass] =  useState("center")
  const [infoSubmitted, setInfoSubmitted] = useState(false)
  const [name, updateName] = useState("")
  const [resultStrings,setResults] = useState({
  })
  const [top5String,setTop5Strings] = useState([])
  let changeClass = function(){
    setCenterDivClass("center centerAnimate")
    setInfoSubmitted(true)
  }

  let submitName = async function(){
    let result = await axios.post('/addName',{
      name: name,
    }, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      } ,
      withCredentials: true })
    console.log(result.headers)
    setResults(result.data)
    changeClass()
    getTop5()
  }

  async function getTop5() {
    let result = await axios.get('/getTopFive');
    setTop5Strings(result.data)
  }

  useEffect(()=>{
    getTop5()
  },[])

  return (
    <div className="container">


      <div className="top5Style">
        <TopFive topFive={top5String}></TopFive>
      </div>

      <div className={centerDivClass}>
        <div> 
          <input className="nameField" value={name} onChange={(e)=>updateName(e.target.value)} type="text"  placeholder="Name/Things"/>
        </div>

        <div className="btnDiv">
          <input className="btnStyle" type="image"  src={middleFlinger}  alt="Submit Form" onClick={()=>submitName()} />
        </div>

      </div>

      <div className="infoStyle">
        {infoSubmitted && <Info infoString={resultStrings}></Info>}
      </div>



    </div>
  );
}

export default App;
