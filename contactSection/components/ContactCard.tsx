import { Mail, Linkedin, Github } from "lucide-react";
import { JSX } from "react";

const ICON_SIZE = 28;

const icons: Record<string, JSX.Element> = {
  Mail: <Mail size={ICON_SIZE} />,
  Linkedin: <Linkedin size={ICON_SIZE} />,
  Github: <Github size={ICON_SIZE} />,
};

type ContactCardProps = {
  icon: string;
  title: string;
  value: string;
  href: string;
};

const ContactCard = ({ icon, title, value, href }: ContactCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-center gap-2 p-4 hover:opacity-70 transition-opacity"
    >
      {icons[icon]}
      <p className="font-bold">{title}</p>
      <p className="text-sm text-gray-500">{value}</p>
    </a>
  );
};

export default ContactCard;