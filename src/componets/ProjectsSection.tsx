import projects from "../data/projects";
import ProjectCard from "./cards/ProjectCard";
import Title from "./Title";

export default function ProjectsSection() {

    const latestProjectsIds = [23, 24, 22, 20]
    const latestProjects = projects.filter(p => latestProjectsIds.includes(p.id));

  return (
    <div id="projects" className="">
      <Title text="Latest" title="Projects" />

      <div className="flex flex-col gap-28 items-center">
        {
            latestProjects.map(project => <ProjectCard project={project} />)
        }
      </div>
    </div>
  )
}
