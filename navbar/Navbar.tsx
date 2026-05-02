"use client";
import { useEffect, useState } from "react";
import {
  Download,
  Folder,
  MessageCircle,
  Menu,
  Star,
  User,
  X,
} from "lucide-react";
import Logo from "./components/Logo";
import NavElement from "./components/NavElement";
import { Button } from "@/components/Button";
import { useActiveSection } from "./useActiveSection";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="sticky top-0 z-50 border-b-2 border-gray-200 bg-white">
      <div className="flex items-center justify-between px-15 py-3 max-lg:px-4">
        <Logo />
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-800 hover:bg-gray-100 lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <div className="hidden items-center gap-2 lg:flex">
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
      <div
        id="mobile-nav"
        className={`border-t border-gray-200 bg-white lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {NavElementsData.map((navElement, i) => (
            <NavElement
              icon={navElement.icon}
              label={navElement.label}
              anchor={navElement.anchor}
              isActive={activeId === navElement.anchor}
              key={i}
              onNavigate={closeMenu}
            />
          ))}
          <a href="/Resume.pdf" download className="pt-2" onClick={closeMenu}>
            <Button
              icon={<Download strokeWidth={1.75} className="w-5" />}
              text="Resume"
            />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
