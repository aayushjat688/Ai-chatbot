import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = 'AIzaSyBxRmLHcNTSZ-LUIYqNEdzhFTKZgEwhxxc';


const genAI = new GoogleGenerativeAI(API_KEY);

async function runGemini(prompt) {

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


  const result = await model.generateContent(prompt);
  

  console.log(result.response.text());
  
}

export default runGemini;

