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
    <div className="flex gap-10 justify-center pb-20">
      {content.categories.map((category, i) => {
        return (
          <div
            className=" w-100 bg-white rounded-lg border-[#E7E8EB] border p-5 shadow-md "
            key={i}
          >
            <div className="mb-5 font-extrabold text-lg flex gap-2">
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
