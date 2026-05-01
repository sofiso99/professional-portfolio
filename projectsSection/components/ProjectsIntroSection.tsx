import AboutIntro from "@/aboutSection/components/AboutIntro";
import content from "../../content/projectsIntroData.json";
import ProjectsList from "./ProjectsList";

const ProjectsIntroSection = () => {
  return (
    <div>
      <AboutIntro
        title={content.projectsIntroData.title}
        highlight={content.projectsIntroData.highlight}
        paragraphs={content.projectsIntroData.paragraphs}
      />
      <ProjectsList />
    </div>
  );
};

export default ProjectsIntroSection;