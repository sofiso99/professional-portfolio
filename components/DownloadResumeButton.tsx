import { Download } from "lucide-react";

const DownloadResumeButton = () => {
  return (
    <a
      href="/Resume.pdf"
      download
      className="inline-flex items-center gap-2 border-2 border-gray-300 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-100 transition"
    >
      <Download strokeWidth={1.75} className="w-5" />
      <span>Resume</span>
    </a>
  );
};

export default DownloadResumeButton;
