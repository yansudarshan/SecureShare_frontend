import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import lady_scanning from "../Images/lady.png";


function Inputimage() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);
  const [limitMode, setLimitMode] = useState("limited");
  const [maxDownloads, setMaxDownloads] = useState(3);
  const [isLoading, setIsLoading] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    if (limitMode === "limited" && maxDownloads <= 0) {
      setError("Maximum downloads must be greater than 0");
      return;
    }

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", file);
      formData.append("maxDownloads", limitMode === "unlimited" ? -1 : maxDownloads);

      const res = await fetch("https://secure-share-backend-sown.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setResponse(data);
      setError("");
    } catch (err) {
      setError("Upload failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!response?.expiresAt) return;

    const interval = setInterval(() => {
      const diff = new Date(response.expiresAt).getTime() - Date.now();

      if (diff <= 0) {
        setTimeLeft("Expired");
        clearInterval(interval);
      } else {
        const mins = Math.floor(diff / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        setTimeLeft(`${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [response]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(response.downloadURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const remaining =
    response && response.maxDownloads !== -1
      ? response.maxDownloads - (response.downloadCount ?? 0)
      : "∞";

  const isExpired = timeLeft === "Expired";
  const isLimitReached = remaining !== "∞" && remaining <= 0;


  return (
    <section className="py-20 space-y-20" id="upload-section">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vivid-orange/10 border border-vivid-orange/20">
            <span className="w-2 h-2 rounded-full bg-vivid-orange animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-vivid-orange">
              AES-256 GCM ENCRYPTION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900">
            SECURE.<br />
            <span className="text-vivid-turquoise">ENCRYPT.</span>
            <br />
            <span className="text-vivid-orange">SHARE.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-md leading-relaxed">
            Military-grade AES-256 encryption for your sensitive files. Generate instant, auto-expiring QR codes for the fastest secure handoff in the industry.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-sm font-medium text-slate-500">Trusted by privacy-first teams</p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <img
              src={lady_scanning}
              alt="Secure file sharing"
              className="w-full h-64 md:h-80 lg:h-[500px] object-cover object-top bg-gradient-to-br from-vivid-turquoise/20 to-vivid-orange/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>


      <div className="max-w-4xl mx-auto" id="create-qr">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-vivid-turquoise to-vivid-orange rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative bg-white rounded-xl border border-slate-200 p-8 md:p-12 shadow-xl">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Upload & Encrypt</h3>
              <p className="text-slate-500">Maximum file size: 200 MB per transfer</p>
            </div>

            {/* Download Limit Controls */}
            <div className="flex h-12 bg-slate-100 p-1 rounded-lg mb-6">
              <label className="flex-1 flex items-center justify-center cursor-pointer rounded-md has-[:checked]:bg-white shadow-sm transition-all">
                <input
                  type="radio"
                  name="limit"
                  checked={limitMode === "limited"}
                  onChange={() => setLimitMode("limited")}
                  className="hidden"
                />
                <span className="text-sm font-bold">Limited (1-10)</span>
              </label>
              <label className="flex-1 flex items-center justify-center cursor-pointer rounded-md has-[:checked]:bg-white shadow-sm transition-all">
                <input
                  type="radio"
                  name="limit"
                  checked={limitMode === "unlimited"}
                  onChange={() => setLimitMode("unlimited")}
                  className="hidden"
                />
                <span className="text-sm font-bold">Unlimited</span>
              </label>
            </div>

            {limitMode === "limited" && (
              <input
                type="number"
                min="1"
                max="10"
                value={maxDownloads}
                onChange={(e) => setMaxDownloads(Number(e.target.value))}
                className="w-full px-4 py-2 mb-6 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vivid-turquoise"
                placeholder="Max downloads"
              />
            )}

            {/* File Upload Area */}
            <form onSubmit={handleSubmit}>
              <div className="border-2 border-dashed border-vivid-turquoise/40 rounded-lg p-16 flex flex-col items-center justify-center bg-vivid-turquoise/5 hover:bg-vivid-turquoise/10 transition-colors cursor-pointer mb-8 relative">
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <span className="material-symbols-outlined text-6xl text-vivid-turquoise mb-4">cloud_upload</span>
                <p className="font-semibold text-xl">Drop your file here</p>
                <p className="text-slate-500">or click to browse local storage</p>
                {file && <p className="text-vivid-turquoise font-medium mt-2">{file.name}</p>}
              </div>

              {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">{error}</div>}

              <div className="flex flex-col md:flex-row items-center gap-8">
                <button
                  type="submit"
                  disabled={isLoading || !file}
                  className="flex-1 w-full bg-vivid-orange text-white h-14 rounded-lg font-bold text-lg shadow-lg shadow-vivid-orange/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span className="material-symbols-outlined">verified_user</span>
                  {isLoading ? "Encrypting..." : "Encrypt & Generate QR"}
                </button>
              </div>
            </form>

            {/* Response Section */}
            {response && (
              <div className="mt-8 pt-8 border-t border-slate-200 space-y-6">
                <div className="bg-deep-navy rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-300 text-sm break-all">{response.downloadURL}</span>
                    <button
                      onClick={handleCopy}
                      className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm whitespace-nowrap"
                    >
                      {copied ? "✓ Copied" : "Copy Link"}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-slate-600">⏳ Expires in</p>
                    <p className="font-bold text-lg text-slate-900">{timeLeft}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-slate-600">📥 Downloads left</p>
                    <p className="font-bold text-lg text-slate-900">{remaining}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <QRCodeCanvas value={response.downloadURL} size={160} />
                  </div>

                  {isExpired || isLimitReached ? (
                    <button
                      disabled
                      className="px-6 py-3 rounded-lg font-bold text-white bg-slate-400 cursor-not-allowed opacity-50"
                    >
                      {isLimitReached ? "🚫 Download limit reached" : "⏰ Link expired"}
                    </button>
                  ) : (
                    <a
                      href={response.downloadURL}
                      download
                      className="px-6 py-3 rounded-lg font-bold text-white bg-vivid-turquoise hover:brightness-110 transition-all"
                    >
                      ⬇ Download File
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inputimage;
