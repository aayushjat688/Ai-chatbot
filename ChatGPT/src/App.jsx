
// import { useContext } from 'react'
import ChatSection from './components/chatSection/ChatSection'
import Sepration from './components/seperation/Sepration'
import Sidebar from './components/sidebar/Sidebar'
import UserContext from './context/UserContext';

// import './App.css'

function App() {

// console.log(data);
  return (
   <UserContext>
   <Sidebar />
   <Sepration />
   <ChatSection />
   </UserContext>
  )
}

export default App
