import { ReactNode } from "react";

const AboutInfoCard = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <div
          className="
            flex items-center justify-center
            h-12 w-12
            rounded-full
            bg-[#3A4150]
            text-white
          "
        >
          {icon}
        </div>
        <span className="font-semibold">{title}</span>
      </div>
      <div
        className="
          max-w-xs
          text-left
          pb-8
        "
      >
        {description}
      </div>
    </div>
  );
};

export default AboutInfoCard;
