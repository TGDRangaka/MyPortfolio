import ProjectCard from "../componets/cards/ProjectCard";
import Title from "../componets/Title";
import projects from "../data/projects";

export default function Projects() {

    const reversArray = projects.reverse();

    return (
        <div className="w-screen min-h-screen pb-20">
            <Title text="My" title="Projects" />

            <div className="flex flex-col gap-28 items-center justify-center  lg:px-10  xl:px-60">
                {
                    reversArray.map((project, i) => <ProjectCard isLeft={i % 2 == 0 ? true : false} project={project} />)
                }
            </div>

        </div>
    )
}
