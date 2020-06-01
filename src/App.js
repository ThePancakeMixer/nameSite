import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import Info from './Info'
import './App.css';
import axios from 'axios';
import useCookie from 'react-use-cookie';

function App() {
  
  var [centerDivClass,setCenterDivClass] =  useState("center")
  var [infoSubmitted, setInfoSubmitted] = useState(false)
  var [firstName, updateFirstName] = useState("")
  var [lastName, updateLastName] = useState("")
  var [infoString,setInfoString] = useState("Retrieving How Many People Feel the Same Way")
  const [userToken, setUserToken] = useCookie('token', '0');

  let changeClass = function(){
    setCenterDivClass("center centerAnimate")
    setInfoSubmitted(true)
  }
  
  let submitName = async function(){
    let result = await axios.post('http://localhost:5000/addName',{
      firstName: firstName,
      lastName: lastName
    })
    setInfoString(result.data)
    changeClass()
  }

  useEffect(()=>{
  },[])

  return (
    <div className="container">

      <div className={centerDivClass}>
        <div> 
          <input value={firstName} onChange={(e)=>updateFirstName(e.target.value)} type="text" placeholder="First Name"/>
          <input value={lastName} onChange={(e)=>updateLastName(e.target.value)} type="text" placeholder="Last Name"/>
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
