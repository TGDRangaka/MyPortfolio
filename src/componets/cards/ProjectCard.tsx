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
    project: Project
}

export default function ProjectCard({ project }: Props) {
    const { name, year, description, github, languages, image, livelink} = project;

    return (
        <div className="border border-green/10 w-72 bg-black p-2 pl-3 relative flex flex-col gap-3">
            <span className="absolute gradient-line w-1 h-full top-0 left-0"></span>
            <span className="absolute gradient-line-h h-1 w-full top-0 left-0"></span>
            <div className="flex flex-col">
                <h3 className="text-base text-green font-bold">{year}</h3>
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-sm font-thin mt-2">{description}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                    {
                        languages.map((lang, index) => (
                            <span className="bg-green text-black px-2 text-xs font-bold rounded pb-1" key={index}>{lang}</span>
                        ))
                    }
                </div>
                <div className="flex text-sm underline text-green mt-2">
                    {github && <a href={github} target="_blank" rel="noopener noreferrer">Github</a>}
                    {livelink && <a href={livelink} target="_blank" rel="noopener noreferrer">View</a>}
                </div>
            </div>

            {image && <div className="relative w-full aspect-project-img">
                <img className="absolute prj-img-3d hover:transform-none duration-200" src={image} alt={image} />
            </div>}
        </div>
    )
}
