import './ChatSection.css'
import Darkmode from '../Darkmode/Darkmode';
import { useContext } from 'react';
import { dataContext } from '../../context/UserContext';
import user from '../../assets/user.png'
import ai from '../../assets/ai.png'
function ChatSection () {
  const {input , setInput , showResult , resultData } = useContext(dataContext);
  return (
    <div className="chatsection">

       <div className="topsection">
        {!showResult 
        ? <div className="headings">
          <span>HELLO AAYUSH</span>
        <span>I'm Your Own Assistant</span>
        <span>What Can I Help You..?</span>
        </div>
        : <div className='result'>
            <div className="userbox">
              <img src={user} width='80px' alt="" />
              <p>{input}</p>
            </div>
            <div className="aibox">
              <img src={ai} width='80px' alt='' />
              <p>{resultData}</p>
            </div>
            
          </div>}
        
       </div>

       <div className="bottomsection">
        <input type="text" onChange={(e)=>setInput(e.target.value)} value={input}/>
        <Darkmode />
       </div>

    </div>
  );
}
export default ChatSection;