import content from "../../content/skillsIntroData.json";
import AboutIntro from "../../aboutSection/components/AboutIntro";
import SkillsInfoCards from "./SkillsInfoCards";
const SkillsIntroSection = () => {
  return (
    <div>
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
