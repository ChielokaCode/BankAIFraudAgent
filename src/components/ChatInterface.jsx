import { useState, useRef, useEffect } from "react";
import {
  FiSend,
  FiAlertTriangle,
  FiCheckCircle,
  FiUser,
  FiDollarSign,
  FiCreditCard,
  FiShield,
} from "react-icons/fi";

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeForm, setActiveForm] = useState(null);
  const messagesEndRef = useRef(null);

  const bankingExamples = [
    "Create a new bank account",
    "Balance",
    "Show recent transactions",
    "Transfer money",
    "Report suspicious activity",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeForm]);

  const handleSendMessage = async (message) => {
    const messageText = typeof message === "string" ? message : inputValue;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate API call to backend
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      let botResponse = {};

      if (
        messageText.toLowerCase().includes("create") ||
        messageText.toLowerCase().includes("account")
      ) {
        console.log(messageText);
        botResponse = {
          text: "I can help you create a new account. For security, we'll need to verify your identity first.",
          actions: [
            { label: "Start KYC Verification", type: "kyc" },
            { label: "Learn about security", type: "info" },
          ],
        };
        setActiveForm("accountCreation");
      } else if (messageText.toLowerCase().includes("transactions")) {
        botResponse = {
          text: "Recent transactions:\n\n1. Jul 15: -$250.00 (Transfer to John D)\n2. Jul 14: +$1,200.00 (Salary Deposit)\n3. Jul 12: -$85.50 (Online Purchase)",
          fraudAlert:
            "⚠️ Unusual activity detected: Multiple login attempts from new device",
        };
      } else if (messageText.toLowerCase().includes("transfer")) {
        botResponse = {
          text: "Let's set up your transfer. First, let's verify it's really you.",
          actions: [
            { label: "Biometric Verification", type: "biometric" },
            { label: "Security Questions", type: "questions" },
          ],
        };
        setActiveForm("moneyTransfer");
      } else if (
        messageText.toLowerCase().includes("fraud") ||
        messageText.toLowerCase().includes("suspicious")
      ) {
        botResponse = {
          text: "Our system detected these potential fraud indicators:\n\n- Unusual login location (New York, US)\n- Rapid sequence of transfers\n- Mismatch with typical spending patterns",
          actions: [
            { label: "Freeze account", type: "freeze" },
            { label: "Contact security", type: "contact" },
          ],
        };
      } else if (messageText.toLowerCase().includes("balance")) {
        console.log(messageText);
        botResponse = {
          text: "Here are your current balances:\n\n- Main Account: $5,245.50\n- Savings Account: $12,000.00\n- Investment Account: $8,750.30",
          actions: [
            { label: "View transaction history", type: "transactions" },
            { label: "Transfer funds", type: "transfer" },
          ],
        };
      } else {
        botResponse = {
          text: "I'm your SentinelAI banking assistant. I can help with accounts, transfers, fraud detection, and security.",
          actions: [
            { label: "Account Services", type: "accounts" },
            { label: "Security Center", type: "security" },
          ],
        };
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: botResponse.text,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString(),
          actions: botResponse.actions,
          fraudAlert: botResponse.fraudAlert,
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Our fraud detection system is currently verifying this request. Please try again shortly.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleExampleClick = (example) => {
    handleSendMessage(example);
  };

  const handleActionClick = (actionType) => {
    switch (actionType) {
      case "kyc":
        setActiveForm("accountCreation");
        break;
      case "transfer":
        setActiveForm("moneyTransfer");
        break;
      case "freeze":
        handleSendMessage("Freeze my account due to suspicious activity");
        break;
      default:
        handleSendMessage(`Tell me more about ${actionType}`);
    }
  };

  const renderForm = () => {
    switch (activeForm) {
      case "accountCreation":
        return (
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
            <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
              <FiUser className="mr-2" /> Account Creation - KYC Verification
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Government ID
                </label>
                <input
                  type="file"
                  className="mt-1 block w-full text-sm text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Selfie Verification
                </label>
                <input
                  type="file"
                  accept="image/*"
                  capture="user"
                  className="mt-1 block w-full text-sm text-gray-500"
                />
              </div>
              <div className="flex space-x-3 pt-2">
                <button
                  onClick={() => setActiveForm(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleSendMessage("I've submitted my KYC documents");
                    setActiveForm(null);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium"
                >
                  Submit for Verification
                </button>
              </div>
            </div>
          </div>
        );
      case "moneyTransfer":
        return (
          <div className="bg-green-50 p-4 rounded-lg border border-green-100 mt-4">
            <h3 className="font-semibold text-green-800 mb-3 flex items-center">
              <FiDollarSign className="mr-2" /> Money Transfer
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  From Account
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option>Main Account (•••3456)</option>
                  <option>Savings Account (•••7821)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  To Account
                </label>
                <input
                  type="text"
                  placeholder="Account number or email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-500 mb-2">
                  <FiShield className="inline mr-1" /> This transfer will be
                  screened by our SentinelAI fraud detection system
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setActiveForm(null)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      handleSendMessage("I've initiated a money transfer");
                      setActiveForm(null);
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium"
                  >
                    Verify & Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl w-full mx-auto bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="flex items-center">
          <div className="bg-white/20 p-2 rounded-lg">
            <FiShield className="text-white text-xl" />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold text-white">
              SentinelAI Banking Assistant
            </h1>
            <p className="text-blue-100 text-sm">
              Secure banking with AI-powered fraud detection
            </p>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div
        className="flex-grow p-6 overflow-y-auto bg-gray-50"
        style={{ maxHeight: "60vh" }}
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="bg-blue-100/50 p-4 rounded-full mb-4">
              <FiShield className="text-blue-600 text-2xl" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Chat with your secure banking assistant
            </h2>
            <p className="text-gray-500 max-w-md">
              Manage accounts, transfer money, or get security help. All
              protected by SentinelAI fraud detection.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs opacity-80">
                      {message.timestamp}
                    </span>
                  </div>
                  <p className="whitespace-pre-wrap">{message.text}</p>

                  {message.fraudAlert && (
                    <div className="mt-2 p-2 bg-red-50 border border-red-100 rounded-lg text-red-700 text-sm flex items-start">
                      <FiAlertTriangle className="mt-0.5 mr-2 flex-shrink-0" />
                      <span>{message.fraudAlert}</span>
                    </div>
                  )}

                  {message.actions && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.actions.map((action, i) => (
                        <button
                          key={i}
                          onClick={() => handleActionClick(action.type)}
                          className={`text-xs px-3 py-1.5 rounded-full ${
                            action.type === "freeze" ||
                            action.type === "contact"
                              ? "bg-red-100 text-red-800 hover:bg-red-200"
                              : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                          }`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            {renderForm()}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="p-6 border-t border-gray-200 bg-white">
        {/* Example prompts */}
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Banking Services
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {bankingExamples.map((example, index) => (
              <button
                key={`bank-${index}`}
                onClick={() => handleExampleClick(example)}
                className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* Input form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex rounded-lg border border-gray-300 overflow-hidden shadow-sm"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-4 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 flex items-center justify-center"
            disabled={!inputValue.trim() || isTyping}
          >
            <FiSend className="text-lg" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
