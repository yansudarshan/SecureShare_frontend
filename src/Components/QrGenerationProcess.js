

import React from 'react';
import process from "../Images/process.png"


const FlagIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
  </svg>
);

const QrGenerationProcess = () => {
  return (
    <section className="relative pt-24 bg-white" id="steps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a]">
            How do I create a secure QR Code?
          </h2>
          <p className="text-slate-500 text-lg">
            Security doesn't have to be complicated. Follow our three-step process.
          </p>
        </div>

        <div className="relative">
          {/* Central Vertical Path */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block w-[2px]">
             <div className="h-full w-full border-l-2 border-dashed border-slate-300 mx-auto"></div>
          </div>

          <div className="space-y-40 relative">
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-24 text-center md:text-right order-2 md:order-1 mt-8 md:mt-0">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#2dd4bf] bg-[#2dd4bf]/10 mb-4">
                  PHASE 01
                </span>
                <h3 className="text-3xl font-bold text-[#1e293b] mb-4">Select Your Data</h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-sm md:ml-auto">
                  Pick any file from documents to massive raw video files. Our system handles any format with ease.
                </p>
              </div>

              {/* Central Indicator 1 */}
              <div className="relative z-10 flex-shrink-0 order-1 md:order-2">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#2dd4bf] rounded-2xl shadow-[0_10px_30px_rgba(45,212,191,0.4)] flex items-center justify-center">
                    <FlagIcon />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">
                    1
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 md:pl-24 order-3 md:order-3 mt-12 md:mt-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] bg-slate-100">
                  <img 
                    src={process}
                    alt="Select Data" 
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-24 order-3 md:order-1 mt-12 md:mt-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800" 
                     
                    alt="Encrypt" 
                    className="w-full h-full object-cover opacity-80 mix-blend-screen"
                  />
                </div>
              </div>

              {/* Central Indicator 2 */}
              <div className="relative z-10 flex-shrink-0 order-1 md:order-2">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#f97316] rounded-2xl shadow-[0_10px_30px_rgba(249,115,22,0.4)] flex items-center justify-center">
                    <FlagIcon />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">
                    2
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 md:pl-24 text-center md:text-left order-2 md:order-3 mt-8 md:mt-0">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#f97316] bg-[#f97316]/10 mb-4">
                  PHASE 02
                </span>
                <h3 className="text-3xl font-bold text-[#1e293b] mb-4">Encrypt & Generate</h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                  The platform applies AES-256 wrapping and generates a unique, cryptographically secure QR code instantly.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-24 text-center md:text-right order-2 md:order-1 mt-8 md:mt-0">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#14b8a6] bg-[#14b8a6]/10 mb-4">
                  PHASE 03
                </span>
                <h3 className="text-3xl font-bold text-[#1e293b] mb-4">Scan & Download</h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-sm md:ml-auto">
                  The recipient simply scans the code. Decryption happens automatically in their secure browser sandbox.
                </p>
              </div>

              {/* Central Indicator 3 */}
              <div className="relative z-10 flex-shrink-0 order-1 md:order-2">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#14b8a6] rounded-2xl shadow-[0_10px_30px_rgba(20,184,166,0.4)] flex items-center justify-center">
                    <FlagIcon />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">
                    3
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 md:pl-24 order-3 md:order-3 mt-12 md:mt-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800" 
                    alt="Scan & Download" 
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition Area: Starts closely after Step 3 */}
      <div className="relative mt-8 bg-[#f5f7f9]">
        {/* Dash connector leading to button */}
        <div className="absolute left-1/2 -top-8 h-24 -translate-x-1/2 z-20 hidden md:block w-[2px]">
           <div className="h-full w-full border-l-2 border-dashed border-slate-300 mx-auto"></div>
        </div>

        {/* The White Curved Overlay (Creating the downside-facing dip) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg 
            viewBox="0 0 1440 160" 
            preserveAspectRatio="none" 
            className="w-full h-[120px] md:h-[160px]"
          >
            <path 
              fill="#ffffff" 
              d="M0,0 L1440,0 L1440,40 Q720,160 0,40 Z"
            />
          </svg>
        </div>

        {/* Content in the colored dip section */}

        <div className="relative pt-24 pb-20 flex flex-col items-center z-30">
          <br></br><br></br>
          <p className="font-bold ">Ready to secure your data?</p>
          <br></br>
          <p>Join over 10,000 users protecting their assets with Secure QR.</p>
          <br></br>
          <a href="#create-qr">
            <button className="px-10 py-3.5 bg-[#71a340] text-white font-semibold rounded-lg shadow-lg hover:bg-[#639038] transition-all transform hover:-translate-y-1 active:translate-y-0 text-lg">
              Create a free QR Code
            </button>
          </a>
           {/* Space for additional footer content or just clean closure */}
           
        </div>
      </div>
    </section>
  );
};

export default QrGenerationProcess;
