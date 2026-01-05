import { ReactNode } from "react";

const NavElement = ({
  icon,
  label,
  anchor,
}: {
  icon: ReactNode;
  label: string;
  anchor: string;
}) => {
  return (
    <div className="flex gap-1 cursor-pointer transition">
      {icon}
      <p>{label}</p>
    </div>
  );
};

export default NavElement;
