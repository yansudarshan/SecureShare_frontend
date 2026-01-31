import "./App.css";
import Inputimage from "./Components/Inputimage";
import AdvantagesSection from "./Components/AdvantagesSection";
import QrGenerationProcess from "./Components/QrGenerationProcess";
import QrBasics from "./Components/QrBasics";
import IndustriesQRSection from "./Components/IndustriesQRSection";
import Footer from "./Components/Footer";

const QRSecurityIcon = ({ size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="3" width="6" height="6" rx="1.2" fill="#14b8a6" />
    <rect x="10" y="3" width="6" height="6" rx="1.2" fill="#14b8a6" />
    <rect x="3" y="10" width="6" height="6" rx="1.2" fill="#14b8a6" />
     <rect x="10" y="10" width="6" height="6" rx="1.2" fill="#f97316" />
  </svg>
);



function App() {
  return (
    <div className="bg-white text-slate-800 min-h-screen">

  {/* HEADER (Logo) */}
<header className="border-b border-slate-100">
  <div className="max-w-7xl mx-auto px-6 py-2">
    <div className="flex items-center gap-2">
      
      {/* Icon */}
      <QRSecurityIcon className="w-12 h-12" />

      {/* Brand Name */}
      <h1 className="flex items-center relative top-[-4px] text-xl md:text-2xl lg:text-3xl font-bold tracking-tight -ml-2">
        <span className="text-vivid-turquoise">Secure</span>
        <span className="text-vivid-orange">Share</span>
      </h1>

    </div>
  </div>
</header>


  {/* NAVIGATION */}
  <nav className="bg-white/10 py-3">
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-8 md:gap-16">
      <a href="#advantages" className="nav-link text-vivid-turquoise font-bold hover:opacity-80 transition-opacity">
        Advantages
      </a>
      <a href="#steps" className="nav-link text-vivid-turquoise font-bold hover:opacity-80 transition-opacity">
        Steps 
      </a>
      <a href="#understand" className="nav-link text-vivid-turquoise font-bold hover:opacity-80 transition-opacity">
        Understand QR
      </a>
      <a href="#industry" className="nav-link text-vivid-turquoise font-bold hover:opacity-80 transition-opacity">
        Industry Use
      </a>
    </div>
  </nav>

  {/* MAIN CONTENT */}
  <main className="max-w-7xl mx-auto px-6">
    <Inputimage />
    <AdvantagesSection />
    <QrGenerationProcess />
    <QrBasics />
    <IndustriesQRSection />
  </main>
  <Footer />

</div>

  );
}

export default App;

