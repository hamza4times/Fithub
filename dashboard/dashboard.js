import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
export { runAI };

const genAI = new GoogleGenerativeAI("AIzaSyAPw_Wnggl4aBg_9Rf19A_QM5D_g96Ik88");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function runAI(instructions) {
  try {
    const result = await model.generateContent(instructions);
    return result.response.text();
  } catch (error) {
    return "Error generating content:";
  }
}

runAI("How are you");
