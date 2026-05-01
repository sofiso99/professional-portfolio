"use client";
import {
  Download,
  Folder,
  MessageCircle,
  Star,
  User,
} from "lucide-react";
import Logo from "./components/Logo";
import NavElement from "./components/NavElement";
import { Button } from "@/components/Button";
import { useActiveSection } from "./useActiveSection";

const Navbar = () => {
  const NavElementsData = [
    {
      icon: <User strokeWidth={2} className="w-5" />,
      label: "About",
      anchor: "about",
    },
    {
      icon: <Star strokeWidth={2} className="w-5" />,
      label: "Skills",
      anchor: "skills",
    },
    {
      icon: <Folder strokeWidth={2} className="w-5" />,
      label: "Projects",
      anchor: "projects",
    },
    {
      icon: <MessageCircle strokeWidth={2} className="w-5" />,
      label: "Contact",
      anchor: "contact",
    },
  ];

  const activeId = useActiveSection(
    NavElementsData.map((n) => n.anchor)
  );

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center border-b-2 border-gray-200 py-3 px-15 bg-white">
      <Logo />
      <div className="flex gap-2 items-center">
        {NavElementsData.map((navElement, i) => (
          <NavElement
            icon={navElement.icon}
            label={navElement.label}
            anchor={navElement.anchor}
            isActive={activeId === navElement.anchor}
            key={i}
          />
        ))}
        <a href="/Resume.pdf" download>
          <Button
            icon={<Download strokeWidth={1.75} className="w-5" />}
            text="Resume"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
