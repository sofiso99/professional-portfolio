import AboutIntro from "@/aboutSection/components/AboutIntro";
import content from "../content/projectsIntroData.json";

const ProjectsSection = () => {
  return (
    <AboutIntro
      title={content.projectsIntroData.title}
      highlight={content.projectsIntroData.highlight}
      paragraphs={content.projectsIntroData.paragraphs}
    />
  );
};

export default ProjectsSection;
