const PromptExamples = ({ onExampleClick }) => {
  const examples = [
    "I want to pay a bill",
    "What are this year's payments?",
    "What is the limit on my Visa?",
    "Show my recent transactions",
    "What's my account balance?",
  ];

  const handleExampleClick = (example) => {
    onExampleClick(example);
  };

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-2">
        Try an example:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => handleExampleClick(example)}
            className="text-left p-3 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700 transition-colors"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptExamples;
