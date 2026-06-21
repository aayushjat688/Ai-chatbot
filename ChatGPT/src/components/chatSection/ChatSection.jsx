import './ChatSection.css'
import Darkmode from '../Darkmode/Darkmode';

function ChatSection () {
  return (
    <div className="chatsection">

       <div className="topsection">
        <div className="headings">
          <span>HELLO AAYUSH</span>
        <span>I'm Your Own Assistant</span>
        <span>What Can I Help You..?</span>
        </div>
       </div>

       <div className="bottomsection">
        <input type="text" />
        <Darkmode />
       </div>

    </div>
  );
}
export default ChatSection;