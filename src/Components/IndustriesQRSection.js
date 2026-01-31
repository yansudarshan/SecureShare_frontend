

import retailImg from "../Images/retail.webp";
import realEstateImg from "../Images/real-estate.webp";
import healthcareImg from "../Images/healthcare.webp";
import educationImg from "../Images/education.webp";
import eventsImg from "../Images/imageFirst.jpg";
import hospitalityImg from "../Images/hospitality.webp";

const industries = [
  {
    image: retailImg,
    title: "Retail",
    description: "Enable contactless checkout, product info, and customer engagement with QR scans."
  },
  {
    image: realEstateImg,
    title: "Real Estate",
    description: "Share virtual tours, brochures, and agent contacts instantly via QR codes."
  },
  {
    image: healthcareImg,
    title: "Healthcare",
    description: "Provide reports, appointment links, and health guidance with scan-and-go access."
  },
  {
    image: educationImg,
    title: "Education",
    description: "Distribute notes, assignments, and learning resources efficiently."
  },
  {
    image: eventsImg,
    title: "Events",
    description: "Simplify check-ins, tickets, schedules, and maps using QR codes."
  },
  {
    image: hospitalityImg,
    title: "Hospitality",
    description: "Replace menus, collect feedback, and enhance guest experience seamlessly."
  }
];

function IndustriesQRSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="industry">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">
            How different industries use{" "}
            <span className="text-vivid-turquoise">QR Codes</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            QR Codes are transforming how industries share information securely and instantly.
          </p>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {industries.map((item, index) => (
    <div
      key={index}
      className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:bg-vivid-turquoise/5"
    >
      {/* Image Section */}
      <div className="w-full h-58">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-8 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {item.title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
}

export default IndustriesQRSection;
