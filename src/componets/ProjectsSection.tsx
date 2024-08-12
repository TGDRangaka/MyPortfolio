import projects from "../data/projects";
import ProjectCard from "./cards/ProjectCard";
import Title from "./Title";

export default function ProjectsSection() {

  const latestProjectsIds = [23, 24, 22, 20]
  const latestProjects = projects.filter(p => latestProjectsIds.includes(p.id));

  return (
    <div id="projects" className="relative">
      <Title text="Latest" title="Projects" />

      <div className="gradient w-400 aspect-square absolute rounded-full top-28 right-0"></div>
      <div className="gradient w-400 aspect-square absolute rounded-full bottom-1/4"></div>
      <div className='absolute top-1/2 left-1/2 flex justify-center items-center -rotate-12'>
        <hr className='-z-10 border-green/20 w-line absolute rotate-90 ' />
        <hr className='-z-10 border-green/20 w-line absolute -rotate-6 ' />
      </div>
      <div className="flex flex-col gap-28 items-center  lg:px-10  xl:px-60">
        {
          latestProjects.map((project,i) => <ProjectCard isLeft={i%2==0 ? true : false} project={project} />)
        }
      </div>
    </div>
  )
}
