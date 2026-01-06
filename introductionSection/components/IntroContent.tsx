import content from "../../content/introData.json";
import Image from "next/image";
import SocialsBanner from "./SocialsBanner";
import { Github, Linkedin, Mail } from "lucide-react";

export const IntroContent = () => {
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
    <div className="grid grid-cols-2 py-20 px-15 gap-18">
      <div className=" flex flex-col gap-6">
        <div className="leading-9">
          <h1 className="font-bold text-[40px]">{content.introData.title}</h1>
          <h2 className="font-bold text-[24px] text-[#737373]  ">
            {content.introData.subtitle}
          </h2>
        </div>

        <div>
          <p className="font-light text-[24px] text-[#737373] ">
            {content.introData.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/picture.jpg"
          alt="profile picture"
          width={400}
          height={300}
          className="rounded-full"
        />
      </div>
      <div>

        <SocialsBanner title="Find me on:" items={socialLinks} />
      </div>
    </div>
  );
};
