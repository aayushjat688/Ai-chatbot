import { useContext, useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import './Darkmode.css'
import { dataContext } from "../../context/UserContext";
function Darkmode () {
  const [mode , setMode] = useState("dark-mode");

  function toggle () {
    if(mode === 'dark-mode'){
        setMode('light-mode')
    }else{
        setMode('dark-mode');
    }
  }
  useEffect(()=>{
      document.body.className = mode;
 },[mode])

 const {sent,input} = useContext(dataContext);

  return(
    <>
    {input ? 
    <button onClick={()=>sent(input)} className="darkmodebtn"><IoSend /></button>
  : null}
    
    <button className="darkmodebtn" onClick={()=>toggle()}>
      {mode === 'dark-mode' && <IoIosSunny />}
      {mode === 'light-mode' && <FaRegMoon />}
    </button>
    
    </>
  )
}
export default Darkmode;