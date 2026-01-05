import { Code, Folder, MessageCircle, Star, User } from "lucide-react";
import Logo from "./components/Logo";
import NavElement from "./components/NavElement";
import DownloadResumeButton from "../components/DownloadResumeButton";

const Navbar = () => {
  const NavElementsData = [
    {
      icon: <User strokeWidth={2} className="w-5" />,
      label: "About",
      anchor: "",
    },
    {
      icon: <Star strokeWidth={2} className="w-5" />,
      label: "Skills",
      anchor: "",
    },
    {
      icon: <Folder strokeWidth={2} className="w-5" />,
      label: "Projects",
      anchor: "",
    },
    {
      icon: <MessageCircle strokeWidth={2} className="w-5" />,
      label: "Contact",
      anchor: "",
    },
  ];
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-200 py-3 px-15">
      <Logo />
      <div className="flex gap-8 items-center ">
        {NavElementsData.map((navElement) => {
          return (
            <NavElement
              icon={navElement.icon}
              label={navElement.label}
              anchor={navElement.anchor}
            />
          );
        })}
        <DownloadResumeButton />
      </div>
    </div>
  );
};

export default Navbar;
