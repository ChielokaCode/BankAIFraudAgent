import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
    >
      <img
        alt=""
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#4694ff] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#4694ff] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About SentinelAI
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            SentinelAI is a cutting-edge fraud detection platform that combines
            AI-powered behavioral analysis, biometric verification, and
            real-time transaction monitoring to protect financial institutions
            and their customers. Our system detects and prevents fraudulent
            activities at every touchpoint - from account creation to money
            transfers - using advanced pattern recognition and machine learning
            algorithms.
          </p>
          <br />
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            To revolutionize financial security by preventing fraud before it
            happens. We're committed to creating a safer digital banking
            environment where transactions are secure, identities are verified,
            and customers can bank with confidence. Our human-in-the-loop
            approach ensures both precision and accountability in every
            decision.
          </p>
          <br />
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Our Technology
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            SentinelAI leverages Azure OpenAI and Semantic Kernel to analyze
            transaction patterns, detect anomalies, and verify identities
            through multi-layered checks including:
          </p>
          <ul className="mt-4 text-lg leading-8 text-gray-300 list-disc pl-6 space-y-2">
            <li>Behavioral pattern tracking for each user</li>
            <li>Real-time spike detection in transaction amounts</li>
            <li>Biometric verification (facial recognition/liveness checks)</li>
            <li>Geolocation and device fingerprinting</li>
            <li>Human-in-the-loop review for edge cases</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
