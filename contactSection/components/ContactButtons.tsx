import { Mail, Linkedin } from "lucide-react";

const ContactButtons = () => {
  return (
    <div className="flex justify-center gap-3 pb-10 flex-wrap">
      <a
        href="mailto:sofrodasg@gmail.com"
        className="flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
      >
        <Mail size={16} />
        Send Email
      </a>
      <a
        href="https://linkedin.com/in/sofiarodas"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-md border border-[#E7E8EB] bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        <Linkedin size={16} />
        Connect on LinkedIn
      </a>
    </div>
  );
};

export default ContactButtons;