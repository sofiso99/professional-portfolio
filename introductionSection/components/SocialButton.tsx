import { ReactNode } from "react";

const SocialButton = ({
  icon,
  href,
  label,
}: {
  icon: ReactNode;
  href: string;
  label: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex items-center justify-center
        
        h-12 w-12
        rounded-full
        bg-gray-200
        text-gray-500

        transition-all duration-200 ease-out

        hover:bg-black
        hover:text-white
        hover:-translate-y-1
      "
    >
      {icon}
    </a>
  );
};

export default SocialButton;
