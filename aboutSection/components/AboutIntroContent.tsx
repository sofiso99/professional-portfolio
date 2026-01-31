import CallToAction from "@/introductionSection/components/CallToAction";
import content from "../../content/aboutIntroData.json";
import AboutIntroGrid from "./AboutInfoGrid";
import SocialsBanner from "@/introductionSection/components/SocialsBanner";
import { Github, Linkedin, Mail } from "lucide-react";

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
    <div className="flex flex-col place-items-center">
      <div className="flex gap-3 font-bold text-[45px] pt-8">
        <h1>{content.aboutIntroData.title}</h1>
        <h1 className="text-[#4C5564]">{content.aboutIntroData.highlight}</h1>
      </div>
      <p className="font-light text-[23px] text-[#737373] py-8 px-85 text-center">
        {content.aboutIntroData.paragraphs[0]}
      </p>
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
