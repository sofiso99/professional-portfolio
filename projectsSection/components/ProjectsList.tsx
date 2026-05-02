import content from "../../content/projectsData.json";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 pb-20">
      {content.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
