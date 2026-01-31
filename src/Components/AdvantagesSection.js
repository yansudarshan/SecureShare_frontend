function AdvantagesSection() {
  const advantages = [
    {
      title: "End-to-End Encryption",
      description: "Files are encrypted locally before they ever leave your device. Only the recipient with the key can unlock them.",
      icon: "lock"
    },
    {
      title: "Ephemeral QR Links",
      description: "QR codes that self-destruct after reaching their download limit or after a specified time window.",
      icon: "qr_code_2"
    },
    {
      title: "Cross-Platform Sync",
      description: "Instantly bridge the gap between desktop and mobile. No apps required for recipients to download files.",
      icon: "devices"
    },
    {
      title: "Global Cloud Nodes",
      description: "Edge delivery network ensures low-latency file retrieval from anywhere in the world at gigabit speeds.",
      icon: "cloud_done"
    },
    {
      title: "Identity Privacy",
      description: "No tracking, no cookies, and no personal data stored. We share your files, not your digital footprint.",
      icon: "shield_person"
    },
    {
      title: "Instant Processing",
      description: "Our multi-threaded encryption engine processes gigabytes of data in seconds, not minutes.",
      icon: "bolt"
    }
  ];

  return (
    <section className="py-24 border-t border-slate-100 relative bg-gradient-to-b from-vivid-turquoise/5 via-vivid-turquoise/10 to-vivid-turquoise/15" id="advantages">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">The SecureShare Advantage</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Proprietary protocols designed for zero-knowledge data exchange and hyper-portable secure sharing.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((item, index) => (
          <div key={index} className="p-8 rounded-xl bg-white border-2 border-slate-200 hover:border-vivid-turquoise hover:shadow-lg hover:-translate-y-2 transition-all group shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-vivid-turquoise/10 flex items-center justify-center mb-6 group-hover:bg-vivid-turquoise transition-colors">
              <span className="material-symbols-outlined text-vivid-turquoise group-hover:text-white">{item.icon}</span>
            </div>
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-slate-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
      <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,80 Q300,-20 600,80 T1200,80 L1200,120 L0,120 Z" fill="rgba(16, 185, 192, 0.2)" />
      </svg>
    </section>
  );
}

export default AdvantagesSection;
