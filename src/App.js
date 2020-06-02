import React,{useState,useEffect} from 'react';
import Info from './Info'
import './App.css';
import axios from 'axios';

function App() {
  
  const [centerDivClass,setCenterDivClass] =  useState("center")
  const [infoSubmitted, setInfoSubmitted] = useState(false)
  const [name, updateName] = useState("")
  const [infoString,setInfoString] = useState("Retrieving How Many People Feel the Same Way")

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
    setInfoString(result.data)
    changeClass()
  }

  useEffect(()=>{
  },[])

  return (
    <div className="container">

      <div className={centerDivClass}>
        <div> 
          <input value={name} onChange={(e)=>updateName(e.target.value)} type="text" placeholder="Full Name"/>
        </div>
        <div className="FuckBtn">
          <button onClick={()=>submitName()}  >Fuck This Person</button>
        </div>
      </div>

      <div className="infoStyle">
        {infoSubmitted && <Info infoString={infoString}></Info>}
      </div>



    </div>
  );
}

export default App;
