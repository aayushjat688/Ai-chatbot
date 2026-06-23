
import { useContext } from 'react'
import ChatSection from './components/chatSection/ChatSection'
import Sepration from './components/seperation/Sepration'
import Sidebar from './components/sidebar/Sidebar'
import { dataContext } from './context/UserContext';

// import './App.css'

function App() {
const data = useContext(dataContext);
// console.log(data);
  return (
   <>
   <Sidebar />
   <Sepration />
   <ChatSection />
   </>
  )
}

export default App
