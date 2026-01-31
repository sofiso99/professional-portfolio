import content from "../../content/introData.json";
import Image from "next/image";
import SocialsBanner from "./SocialsBanner";
import { Github, Linkedin, Mail } from "lucide-react";
import CallToAction from "./CallToAction";

export const IntroContent = () => {
  const ICON_SIZE = 20;

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
    <div className="grid grid-cols-2 py-20 px-15 gap-18">
      <div className="flex flex-col gap-9">
        <div className="leading-9">
          <h1 className="font-bold text-[40px]">{content.introData.title}</h1>
          <h2 className="font-bold text-[24px] text-[#737373]  ">
            {content.introData.subtitle}
          </h2>
        </div>
        <p className="font-light text-[24px] text-[#737373]">
          {content.introData.description}
        </p>
        <SocialsBanner title="Find me on:" items={socialLinks} />
        <div>
          <CallToAction />
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/picture.jpg"
          alt="profile picture"
          width={350}
          height={300}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
