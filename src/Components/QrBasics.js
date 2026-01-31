// function QrBasics() {
//   const features = [
//     {
//       title: "High Resilience",
//       description: "Error correction algorithms ensure data integrity, even if the code is partially damaged.",
//       icon: "shield"
//     },
//     {
//       title: "Dense Data Storage",
//       description: "Stores hundreds of times more information than standard barcodes, perfect for keys.",
//       icon: "storage"
//     },
//     {
//       title: "Universal Reach",
//       description: "Natively supported by every modern smartphone camera without additional software.",
//       icon: "smartphone"
//     }
//   ];

//   return (
//     <section id="understand" className="py-24 border-t border-slate-100">
//       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//         {/* LEFT IMAGE */}
//         <div className="flex justify-center order-2 md:order-1">
//           <div className="w-full max-w-md h-96 rounded-2xl overflow-hidden shadow-2xl">
//             <img 
//               src="https://picsum.photos/seed/qrtech/500/600" 
//               alt="QR Technology" 
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="space-y-8 order-1 md:order-2">
//           <div>
//             <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-vivid-turquoise bg-vivid-turquoise/10 mb-4">
//               TECHNOLOGY INSIGHTS
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What are QR Codes?</h2>
//             <p className="text-slate-500 text-lg leading-relaxed">
//               Quick Response (QR) codes are matrix barcodes designed for high-speed readability. When combined with SecureShare, they become a physical gateway to encrypted digital assets.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-4">
//             {features.map((feature, index) => (
//               <div key={index} className="p-4 rounded-lg bg-white border border-slate-200 hover:border-vivid-turquoise hover:shadow-md transition-all">
//                 <div className="flex gap-3 items-start">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-vivid-turquoise/10">
//                       <span className="material-symbols-outlined text-vivid-turquoise text-base">{feature.icon}</span>
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-base font-semibold text-slate-900 mb-1">{feature.title}</h3>
//                     <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default QrBasics;



import React from 'react';
import info_QR from "../Images/hand-qrcodes.png"

const ShieldIcon = () => (
  <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const DeviceIcon = () => (
  <svg className="w-6 h-6 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const QrIcon = () => (
  <svg className="w-8 h-8 text-[#2dd4bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
  </svg>
);

const QrBasics = () => {
  const features = [
    {
      title: "High Resilience",
      description: "Error correction algorithms ensure data integrity even if the code is partially damaged.",
      icon: <ShieldIcon />,
      bgColor: "bg-[#2dd4bf]/10"
    },
    {
      title: "Dense Data Storage",
      description: "Stores hundreds of times more information than standard barcodes, perfect for keys.",
      icon: <DatabaseIcon />,
      bgColor: "bg-[#f97316]/10"
    },
    {
      title: "Universal Reach",
      description: "Natively supported by every modern smartphone camera without additional software.",
      icon: <DeviceIcon />,
      bgColor: "bg-[#14b8a6]/10"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 " id="understand">
      <div className="bg-white rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.06)] overflow-hidden border border-slate-50">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          
          {/* LEFT COLUMN: VISUALS */}
          <div className="w-full md:w-1/2 p-10 md:p-12">
            <div className="relative h-full w-full rounded-3xl overflow-hidden bg-slate-900 group">
              {/* Background abstract image */}
              <img 
                //src= "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80&w=1200"
                alt="Digital Security" 
                className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-105 group-hover:scale-110 transition-transform duration-1000"
              />
              
              {/* The "Glass" object overlay (simulated with CSS and image) */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                    <img 
                       src={info_QR}
                       className="w-180 h-160 drop-shadow-2xl brightness-125 contrast-125 mix-blend-screen opacity-90"
                       alt="Abstract tech shape"
                    />
                    
                    
                    
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-[#2dd4bf] rounded-full"></div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">Technology Insights</span>
              </div>

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                What are QR Codes?
              </h2>

              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Quick Response (QR) codes are matrix barcodes designed for high-speed readability. When combined with SecureShare, they become a physical gateway to encrypted digital assets.
              </p>

              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
                    <div className="flex gap-5 items-start">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${feature.bgColor} transition-transform group-hover:scale-110`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QrBasics;
