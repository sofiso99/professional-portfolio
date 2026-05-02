import { ReactNode } from "react";

const NavElement = ({
  icon,
  label,
  anchor,
  isActive,
  onNavigate,
}: {
  icon: ReactNode;
  label: string;
  anchor: string;
  isActive: boolean;
  onNavigate?: () => void;
}) => {
  return (
    <a
      href={`#${anchor}`}
      onClick={onNavigate}
      className={`flex gap-1 items-center px-3 py-1.5 rounded-md cursor-pointer transition ${
        isActive
          ? "bg-black text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      <p>{label}</p>
    </a>
  );
};

export default NavElement;
