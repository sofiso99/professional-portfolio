import { ReactNode } from "react";
import SocialButton from "./SocialButton";

const SocialBanner = ({
  title,
  items, // here is the value
}: {
  title: string;
  items: { icon: ReactNode; href: string; label: string }[]; // here is the type of the value
}) => {
  return (
    <div className="flex items-center gap-4 max-lg:flex-col max-lg:items-center max-lg:gap-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="flex gap-4 max-lg:flex-wrap max-lg:justify-center max-lg:gap-3">
        {items.map((item) => (
          <SocialButton
            key={item.label}
            icon={item.icon}
            href={item.href}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialBanner;
