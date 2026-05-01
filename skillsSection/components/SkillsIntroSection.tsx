import content from "../../content/skillsIntroData.json";
import AboutIntro from "../../aboutSection/components/AboutIntro";
import SkillsInfoCards from "./SkillsInfoCards";
const SkillsIntroSection = () => {
  return (
    <div className="flex flex-col place-items-center py-20">
      <AboutIntro
        title={content.skillsIntroData.title}
        highlight={content.skillsIntroData.highlight}
        paragraphs={content.skillsIntroData.paragraphs}
      />
      <SkillsInfoCards />
    </div>
  );
};

export default SkillsIntroSection;
