// import React from "react";
import './Sidebar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { useState } from 'react';
function Sidebar () {
  const [extend , setExtend] = useState(false);
  
  return (
    <div className="sidebar">
      <GiHamburgerMenu id='ham' onClick={()=>setExtend(prev => !prev)}/>
      <div className="newchat">
      <FaPlus />
      {extend ? <p>New Chat</p> : ""}
      </div>
      <div className="recent">
      <FaMessage />
      {extend ? <p>Who are you</p> : ""}
      </div>
    </div>
  );
}
export default Sidebar;