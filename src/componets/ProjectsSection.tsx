import projects from "../data/projects";
import ProjectCard from "./cards/ProjectCard";
import Title from "./Title";

export default function ProjectsSection() {
  return (
    <div className="">
      <Title title="Projects" />

      <div className="flex flex-col gap-14">
        {
            projects.map(project => <ProjectCard project={project} />)
        }
      </div>
    </div>
  )
}
