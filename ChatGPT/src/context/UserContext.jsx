import { createContext,useState } from "react";
import run from "../gemini";

export const dataContext = createContext();
function UserContext ({children}) {

  const [input , setInput] = useState("");
  const [showResult , setShowResult] = useState(false);
  const [loading , setLoading] = useState(false);
  const[resultData , setResultData] = useState("");
  const [recentPromt , setRecentPromt] = useState("");
  const [pPrompt, setPPrompt] = useState([]);

  
async function sent(input) {
  setShowResult(true);
  setLoading(true);
  setRecentPromt(input)
  setPPrompt(prev => [...prev, input]);
console.log(pPrompt);
  setInput("")
  let response = await run(input)
  setLoading(false)
  setResultData(response.split("**") && response.split("*"));
}
function newChat () {
    setShowResult(false);
    setLoading(false);
  }

const data = {
  input,
  setInput,
  sent,
  showResult,
  loading,
  setLoading,
  setShowResult,
  resultData,
  setResultData,
  recentPromt,
  pPrompt,
  newChat
}

  return (
    <dataContext.Provider value={data}>
    {children}
    </dataContext.Provider>
  );
}

export default UserContext;