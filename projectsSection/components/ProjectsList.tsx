import content from "../../content/projectsData.json";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto px-4 pb-20">
      {content.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;