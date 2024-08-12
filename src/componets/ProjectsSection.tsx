import projects from "../data/projects";
import ProjectCard from "./cards/ProjectCard";
import Title from "./Title";

export default function ProjectsSection() {

  const latestProjectsIds = [23, 17, 22, 20]
  const latestProjects = projects.filter(p => latestProjectsIds.includes(p.id));

  return (
    <div id="projects" className="relative">
      <Title text="Latest" title="Projects" />

      <div className="gradient w-400 aspect-square absolute rounded-full top-28 right-0  lg:right-1/2 lg:top-1/4  2xl:w-800"></div>
      <div className="gradient w-400 aspect-square absolute rounded-full bottom-1/4  lg:left-1/2 lg:top-3/4 lg:bottom-auto  2xl:w-800"></div>

      <div className="flex flex-col gap-28 items-center justify-center  lg:px-10  xl:px-60">
        <hr className='-z-10 border-green/20 w-line absolute rotate-45 lg:w-xline' />

        {
          latestProjects.map((project, i) => <ProjectCard isLeft={i % 2 == 0 ? true : false} project={project} />)
        }
      </div>
    </div>
  )
}
