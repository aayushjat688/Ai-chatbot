import './Sidebar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus, FaMessage } from "react-icons/fa6";
import { useContext, useState } from 'react';
import { dataContext } from '../../context/UserContext';

function Sidebar () {
  const [extend , setExtend] = useState(false);
  const { newChat } = useContext(dataContext);  

  return (
    <div className="sidebar">
      <GiHamburgerMenu id='ham' onClick={() => setExtend(prev => !prev)} />

      <div className="newchat" onClick={()=>newChat}>
        <FaPlus />
        {extend && <p>New Chat</p>}
      </div>

        <div className="recent">
          <FaMessage />
          {extend && <p>No recent chats</p>}
        </div>
      
    </div>
  );
}

export default Sidebar;
