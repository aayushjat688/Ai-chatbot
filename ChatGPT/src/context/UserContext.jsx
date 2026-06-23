import { createContext,use,useState } from "react";
import run from "../gemini";

export const dataContext = createContext();
function UserContext ({children}) {

  const [input , setInput] = useState("");
  const [showResult , setShowResult] = useState(false);
  const [loading , setLoading] = useState(false);
  const[resultData , setResultData] = useState("");
  const [recentPromt , setRecentPromt] = useState("");
  
async function sent(prompt) {
  setShowResult(true);
  setLoading(true);
  setRecentPromt(input)
  setInput("")
  let response = await run(prompt)
  setLoading(false)
  setResultData(response);
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
  recentPromt
}


  return (
    <dataContext.Provider value={data}>
    {children}
    </dataContext.Provider>
  );
}

export default UserContext;