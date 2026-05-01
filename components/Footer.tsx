import { Code, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/sofiso99", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sofiarodas", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sofrodasg@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-200 bg-white py-6 px-15">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex gap-2 items-center text-sm text-gray-600">
          <Code strokeWidth={2} size={18} />
          <p>Built with Next.js and Tailwind CSS. © 2026 Sofia Rodas.</p>
        </div>

        <div className="flex gap-4 items-center">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-600 hover:text-black transition"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;