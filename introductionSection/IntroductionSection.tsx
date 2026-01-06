import { Github, Linkedin, Mail } from "lucide-react";
import { IntroContent } from "./components/IntroContent";
import SocialsBanner from "./components/SocialsBanner";

export const IntroductionSection = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/sofiso99",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/sofiarodas/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:sofrodasg@gmail.com",
      label: "Email",
    },
  ];
  return (
    <div>
      <IntroContent />
      <SocialsBanner title="Find me on:" items={socialLinks} />
    </div>
  );
};
