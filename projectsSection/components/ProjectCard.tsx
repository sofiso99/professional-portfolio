import Image from "next/image";
import { Github, ExternalLink, Lock } from "lucide-react";
import { TechTag } from "./TechTag";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  codeUrl: string | null;
  liveUrl: string | null;
  isPrivate: boolean;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-lg border border-[#E7E8EB] shadow-md p-5 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="relative w-full aspect-video bg-gray-100 rounded-md overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-extrabold text-xl">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>

        <div className="mt-2 flex gap-2 max-lg:flex-wrap">
          {project.isPrivate ? (
            <span className="flex items-center gap-1.5 rounded-md border border-[#E7E8EB] bg-white px-3 py-1.5 text-sm text-gray-500">
              <Lock size={14} />
              Private
            </span>
          ) : (
            project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-md border border-[#E7E8EB] bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
              >
                <Github size={14} />
                Code
              </a>
            )
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md bg-black px-3 py-1.5 text-sm text-white hover:bg-gray-800"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;