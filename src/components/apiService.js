import axios from "axios";

const api = axios.create({
  baseURL: "https://sentinel-ai-aqbrebe4adhah9g4.westus-01.azurewebsites.net",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Only if you're using cookies/auth
});

export const chatWithAI = async (message) => {
  try {
    const response = await api.post("/chat", {
      message: message,
    });
    return response.data;
  } catch (error) {
    console.error("Error communicating with AI:", error);
    throw error;
  }
};
