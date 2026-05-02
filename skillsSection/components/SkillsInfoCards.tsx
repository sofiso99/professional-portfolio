import { Monitor, Server } from "lucide-react";
import content from "../../content/skillsBoxData.json";
import { SkillsBox } from "./SkillsBox";
import { JSX } from "react";

const ICON_SIZE = 25;

const SkillsInfoCards = () => {
  const icons: Record<string, JSX.Element> = {
    Monitor: <Monitor size={ICON_SIZE} />,
    Server: <Server size={ICON_SIZE} />,
  };
  return (
    <div className="flex justify-center gap-10 pb-20 max-lg:flex-col max-lg:items-stretch max-lg:gap-8 max-lg:px-4 max-lg:pb-16">
      {content.categories.map((category, i) => {
        return (
          <div
            className="w-100 shrink-0 rounded-lg border border-[#E7E8EB] bg-white p-5 shadow-md max-lg:w-full max-lg:max-w-xl max-lg:mx-auto"
            key={i}
          >
            <div className="mb-5 flex gap-2 text-lg font-extrabold">
              {icons[category.icon]}
              <p>{category.title}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 font-bold">
              {category.skills.map((skill, i) => {
                return <SkillsBox title={skill} key={i} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsInfoCards;
