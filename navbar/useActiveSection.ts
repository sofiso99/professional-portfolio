"use client";
import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 100;
      const scrollY = window.scrollY;

      // Build list of sections with their absolute positions
      const sections = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return {
            id,
            top: rect.top + scrollY,
            bottom: rect.bottom + scrollY,
          };
        })
        .filter((s): s is { id: string; top: number; bottom: number } => s !== null);

      // Active = the section whose range contains (scrollY + navHeight)
      const cursor = scrollY + navHeight;
      const active = sections.find(
        (s) => cursor >= s.top && cursor < s.bottom
      );

      // If we're below all sections, highlight the last one
      const lastSection = sections[sections.length - 1];
      if (!active && lastSection && cursor >= lastSection.top) {
        setActiveId(lastSection.id);
        return;
      }

      setActiveId(active?.id ?? "");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds]);

  return activeId;
};