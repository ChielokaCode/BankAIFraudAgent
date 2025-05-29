import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
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
