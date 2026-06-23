
 import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AQ.Ab8RN6JzeOZwBqn7i1nUWTxFAmFRmEaIa4Lrvb1Rp6xN1wHsbA");

async function run(promt) {
  // Use one of the models from your list
  const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

  const result = await model.generateContent(promt);
  return result.response.text()
}

export default run;

