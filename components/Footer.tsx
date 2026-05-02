import { Code, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/sofiso99", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sofiarodas", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sofrodasg@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-200 bg-white py-6 px-15 max-lg:px-4 max-lg:py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 max-lg:flex-col max-lg:justify-center max-lg:text-center">
        <div className="flex items-center gap-2 text-sm text-gray-600 max-lg:max-w-md max-lg:flex-col sm:max-lg:flex-row">
          <Code strokeWidth={2} size={18} className="shrink-0" />
          <p>Built with Next.js and Tailwind CSS. © 2026 Sofia Rodas.</p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-600 transition hover:text-black"
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
