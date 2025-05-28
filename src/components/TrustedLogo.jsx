import React from "react";

const TrustedLogo = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by leading financial institutions
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="GTBank"
            src="/logos/gtbank-logo.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            alt="Zenith Bank"
            src="/logos/zenith-logo.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            alt="Flutterwave"
            src="/logos/flutterwave-logo.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            alt="Paystack"
            src="/logos/paystack-logo.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            alt="Kuda Bank"
            src="/logos/kuda-logo.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          SentinelAI processes over ₦15B in transactions daily across our
          partner network
        </p>
      </div>
    </div>
  );
};

export default TrustedLogo;
