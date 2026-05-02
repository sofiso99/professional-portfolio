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
    <div className="grid grid-cols-2 gap-18 px-15 py-50 max-lg:grid-cols-1 max-lg:items-center max-lg:gap-10 max-lg:px-4 max-lg:py-16">
      <div className="flex flex-col gap-9 max-lg:order-2 max-lg:gap-8">
        <div className="leading-9 max-lg:leading-tight">
          <h1 className="text-[40px] font-bold max-lg:text-center max-lg:text-3xl sm:max-lg:text-4xl">
            {content.introData.title}
          </h1>
          <h2 className="text-[24px] font-bold text-[#737373] max-lg:mt-2 max-lg:text-center max-lg:text-xl sm:max-lg:text-2xl">
            {content.introData.subtitle}
          </h2>
        </div>
        <p className="text-[24px] font-light text-[#737373] max-lg:text-center max-lg:text-lg sm:max-lg:text-xl">
          {content.introData.description}
        </p>
        <SocialsBanner title="Find me on:" items={socialLinks} />
        <CallToAction />
      </div>
      <div className="flex justify-center max-lg:order-1">
        <Image
          src="/picture.jpg"
          alt="profile picture"
          width={350}
          height={300}
          className="rounded-full max-lg:h-auto max-lg:w-full max-lg:max-w-[280px] max-lg:object-cover sm:max-lg:max-w-[320px]"
        />
      </div>
    </div>
  );
};
