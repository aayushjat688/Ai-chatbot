import { createContext,useState } from "react";
import run from "../gemini";

export const dataContext = createContext();
function UserContext ({children}) {

  const [input , setInput] = useState("");
  const [showResult , setShowResult] = useState(false);
  const [loading , setLoading] = useState(false);
  const[resultData , setResultData] = useState("");

async function sent(prompt) {
  setShowResult(true);
  setLoading(true);
  
  let response = await run(prompt)

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
  setResultData
}


  return (
    <dataContext.Provider value={data}>
    {children}
    </dataContext.Provider>
  );
}

export default UserContext;