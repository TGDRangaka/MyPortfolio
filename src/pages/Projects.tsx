import ProjectCard from "../componets/cards/ProjectCard";
import Title from "../componets/Title";
import projects from "../data/projects";
import SEO from "../components/SEO";

export default function Projects() {

    const reversArray = projects.reverse();

    const projectsStructuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Dilshan Rangaka's Projects",
        "description": "Portfolio showcasing innovative software projects including web applications, mobile apps, and full-stack solutions",
        "url": "https://dilshan-rangaka.vercel.app/projects",
        "author": {
            "@type": "Person",
            "name": "Dilshan Rangaka"
        },
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
                "@type": "CreativeWork",
                "position": index + 1,
                "name": project.name || `Project ${index + 1}`,
                "description": project.description || "Software development project",
                "author": {
                    "@type": "Person",
                    "name": "Dilshan Rangaka"
                }
            }))
        }
    };

    return (
        <>
            <SEO 
                title="Projects - Dilshan Rangaka | Full Stack Developer Portfolio"
                description="Explore my portfolio of innovative software projects including web applications, mobile apps, POS systems, and full-stack solutions built with React, Java, Node.js, and modern technologies."
                keywords="Dilshan Rangaka Projects, Software Projects, Web Development Portfolio, Mobile App Development, POS Systems, React Projects, Java Projects, Full Stack Projects"
                url="https://dilshan-rangaka.vercel.app/projects"
                structuredData={projectsStructuredData}
            />
            <div className="w-screen min-h-screen pb-20">
                <Title text="My" title="Projects" />

                <div className="flex flex-col gap-28 items-center justify-center lg:px-10 xl:px-60">
                    {
                        reversArray.map((project, i) => (
                            <ProjectCard 
                                key={project.id || i} 
                                isLeft={i % 2 == 0 ? true : false} 
                                project={project} 
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
