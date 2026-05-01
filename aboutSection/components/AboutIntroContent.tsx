import CallToAction from "@/introductionSection/components/CallToAction";
import content from "../../content/aboutIntroData.json";
import AboutIntroGrid from "./AboutInfoGrid";
import SocialsBanner from "@/introductionSection/components/SocialsBanner";
import { Github, Linkedin, Mail } from "lucide-react";
import AboutIntro from "./AboutIntro";

const ICON_SIZE = 20;

const AboutIntroContent = () => {
  const socialLinks = [
    {
      icon: <Github size={ICON_SIZE} />,
      href: "https://github.com/sofiso99",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={ICON_SIZE} />,
      href: "https://www.linkedin.com/in/sofiarodas/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={ICON_SIZE} />,
      href: "mailto:sofrodasg@gmail.com",
      label: "Email",
    },
  ];
  return (
    <div className="flex flex-col place-items-center py-5">
      <AboutIntro
        title={content.aboutIntroData.title}
        highlight={content.aboutIntroData.highlight}
        paragraphs={content.aboutIntroData.paragraphs}
      />
      <div className="font-light text-[20px] text-[#737373] text-center">
        <AboutIntroGrid />
      </div>

      <div className="flex gap-10 pt-10 pb-10">
        <SocialsBanner title="Find me on:" items={socialLinks} />
        <CallToAction />
      </div>
    </div>
  );
};

export default AboutIntroContent;
