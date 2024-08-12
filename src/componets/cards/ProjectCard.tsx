interface Project {
    id: number,
    name: string,
    year: string | number,
    platform: string,
    description: string,
    github: string,
    languages: string[],
    image: string | null,
    imageView: string,
    livelink: string | null,
    other: string | null,
    type: string[],
}

interface Props {
    project: Project;
    isLeft: boolean;
}

export default function ProjectCard({ project, isLeft }: Props) {
    const { name, year, description, github, languages, image, livelink} = project;

    return (
        <div className={`border border-green/10 w-72 bg-black p-2 pl-3 relative flex flex-col gap-3  lg:flex-row lg:w-800 lg:items-center  ${isLeft ? 'lg:self-start' : 'lg:self-end'}`}>
            <span className="absolute gradient-line w-1 h-full top-0 left-0"></span>
            <span className="absolute gradient-line-h h-1 w-full top-0 left-0"></span>
            <div className="flex flex-col lg:w-11/12  2xl:w-4/5">
                <h3 className="text-base text-green font-semibold  lg:text-lg">{year}</h3>
                <h1 className="text-xl font-bold  lg:text-2xl">{name}</h1>
                <p className="text-sm font-thin mt-2  lg:text-base">{description}</p>
                <div className="flex gap-2 mt-2 flex-wrap lg:mt-4">
                    {
                        languages.map((lang, index) => (
                            <span className="bg-green text-black px-2 text-xs font-bold rounded pb-1  lg:text-sm lg:pb-0 lg:font-semibold" key={index}>{lang}</span>
                        ))
                    }
                </div>
                <div className="flex text-sm underline text-green mt-2 gap-5 lg:text-base">
                    {github && <a href={github} target="_blank" rel="noopener noreferrer">Github</a>}
                    {livelink && <a href={livelink} target="_blank" rel="noopener noreferrer">View</a>}
                </div>
            </div>

            {image && <div className="relative w-full aspect-project-img  lg:h-40 lg:flex lg:items-center  2xl:h-52">
                <img className="absolute prj-img-3d hover:transform-none duration-300  " src={image} alt={image} />
            </div>}
        </div>
    )
}
