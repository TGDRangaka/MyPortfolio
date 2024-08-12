interface Project {
    id: number,
    name: string,
    year: string | number,
    platform: string,
    description: string,
    github: string,
    languages: string[],
    image: string,
    imageView: string,
    livelink: string | null,
    other: string | null,
    type: string[],
}

interface Props {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    // const { id, name, year, platform, description, github, languages, image, imageView, livelink, other, type } = project;

    return project && (
        <div className="border border-green/10 w-72">
            {/* <h3>{year}</h3> */}
        </div>
    )
}
