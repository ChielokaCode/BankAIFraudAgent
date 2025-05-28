import { useNavigate } from "react-router-dom";
import { ChatInterface } from "../components";

const ChatPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <button
        onClick={handleBack}
        className="absolute top-10 left-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-black cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      <main className="flex-grow container mx-auto p-4 flex flex-col">
        <ChatInterface />
      </main>
    </div>
  );
};

export default ChatPage;
