interface Project {
    id: number,
    title: string,
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
    awardImages: string[],
    linkedin: string,
}

interface Props {
    project: Project;
}


export default function AwardProjectCard({ project }: Props) {
    const { name, year, description, github, languages, image, livelink, awardImages, title, linkedin } = project;

    return (
        <div className="group relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            {/* Main Card Container */}
            <div className="relative bg-gradient-to-br from-black via-grey/50 to-black border border-green/20 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-green/40 hover:shadow-2xl hover:shadow-green/10">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-green/10 via-transparent to-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-green/30 to-transparent rounded-br-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-green/30 to-transparent rounded-tl-3xl"></div>

                {/* Header Section */}
                <div className="relative p-4 sm:p-6 lg:p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white via-green to-white bg-clip-text text-transparent mb-2">
                            {title}
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-green to-transparent mx-auto rounded-full"></div>
                    </div>

                    {/* Mobile Award Images Gallery */}
                    <div className="lg:hidden mb-6">
                        <div className="grid grid-cols-1 gap-4">
                            {awardImages.map((awardImage, index) => (
                                <div key={index} className="relative group/award-mobile">
                                    <div className="h-48 sm:h-56 md:h-64 flex justify-center items-center bg-gradient-to-br from-grey/30 to-black/50 border border-green/20 rounded-xl overflow-hidden p-4 transition-all duration-300 hover:border-green/40 hover:shadow-lg hover:shadow-green/10">
                                        <img 
                                            className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
                                            src={awardImage} 
                                            alt={`Award ${index + 1}`} 
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row lg:gap-8">
                        {/* Project Info */}
                        <div className="flex-1 space-y-4 lg:space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
                                <span className="text-green font-semibold text-sm sm:text-base lg:text-lg">{year}</span>
                            </div>
                            
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight">
                                {name}
                            </h2>
                            
                            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                                {description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {languages.map((lang, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1.5 bg-gradient-to-r from-green/20 to-green/10 border border-green/30 rounded-full text-xs sm:text-sm font-medium text-green transition-all duration-300 hover:from-green/30 hover:to-green/20 hover:border-green/50 hover:scale-105"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
                                {github && (
                                    <a 
                                        href={github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm sm:text-base text-green hover:text-white transition-colors duration-300 hover:underline"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        GitHub
                                    </a>
                                )}
                                {livelink && (
                                    <a 
                                        href={livelink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm sm:text-base text-green hover:text-white transition-colors duration-300 hover:underline"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                                {linkedin && (
                                    <a 
                                        href={linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm sm:text-base text-green hover:text-white transition-colors duration-300 hover:underline"
                                    >
                                        <img className="w-4 h-4" src="/prj-linkedin.png" alt="LinkedIn" />
                                        LinkedIn
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Project Image */}
                        {image && (
                            <div className="flex-shrink-0 lg:w-1/2 xl:w-2/5">
                                <div className="relative group/image">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-transparent rounded-xl blur-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative overflow-hidden rounded-xl border border-green/20 p-4 bg-gradient-to-br from-grey/20 to-black/50">
                                        <img 
                                            className="w-full h-auto max-h-64 sm:max-h-72 lg:max-h-80 object-contain transition-transform duration-500 group-hover/image:scale-105" 
                                            src={image} 
                                            alt={name} 
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Desktop Award Images Gallery */}
                    <div className="hidden lg:block mt-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-0.5 bg-gradient-to-r from-green to-transparent"></div>
                            <span className="text-green font-medium text-sm">Awards & Recognition</span>
                            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-green"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 xl:gap-6">
                            {awardImages.map((awardImage, index) => (
                                <div key={index} className="relative group/award">
                                    <div className="h-48 xl:h-56 bg-gradient-to-br from-grey/30 to-black/50 border border-green/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-green/40 hover:shadow-lg hover:shadow-green/10">
                                        <img 
                                            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover/award:scale-110" 
                                            src={awardImage} 
                                            alt={`Award ${index + 1}`} 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/award:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
