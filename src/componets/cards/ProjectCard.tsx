import TextType from '../TextType';

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
    linkedin?: string,
}

interface Props {
    project: Project;
    isLeft: boolean;
}

export default function ProjectCard({ project, isLeft }: Props) {
    const { name, year, description, github, languages, image, livelink, other, platform, type } = project;

    return (
        <div className={`group relative w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto ${isLeft ? 'lg:mr-auto lg:ml-0' : 'lg:ml-auto lg:mr-0'}`}
             data-aos={!isLeft ? "fade-left" : "fade-right"}>
            
            {/* Main Card Container */}
            <div className="relative bg-gradient-to-br from-black via-grey/50 to-black border border-green/20 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-green/40 hover:shadow-2xl hover:shadow-green/10 hover:-translate-y-1">
                
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-green/10 via-transparent to-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Accents */}
                {/* <div className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} w-12 h-12 bg-gradient-to-br from-green/30 to-transparent ${isLeft ? 'rounded-br-2xl' : 'rounded-bl-2xl'}`}></div>
                <div className={`absolute bottom-0 ${isLeft ? 'right-0' : 'left-0'} w-12 h-12 bg-gradient-to-tl from-green/30 to-transparent ${isLeft ? 'rounded-tl-2xl' : 'rounded-tr-2xl'}`}></div> */}

                 {/* Platform Badge */}
                 <div className="absolute top-4 right-4 z-10">
                     <span className="px-3 py-1 bg-gradient-to-r from-green/20 to-green/10 border border-green/30 rounded-full text-xs font-medium text-green backdrop-blur-sm">
                         <TextType
                             text={platform}
                             typingSpeed={60}
                             initialDelay={200}
                             showCursor={false}
                             className="text-green uppercase tracking-wider"
                             startOnVisible={true}
                             loop={false}
                         />
                     </span>
                 </div>

                {/* Main Content */}
                <div className="relative p-4 sm:p-6 lg:p-8">
                    <div className={`flex flex-col gap-6 ${image ? 'lg:flex-row lg:items-center lg:gap-8' : ''}`}>
                        
                        {/* Project Info */}
                        <div className="flex-1 space-y-4 lg:space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
                                <span className="text-green font-semibold text-sm sm:text-base lg:text-lg">{year}</span>
                                <div className="flex-1 h-px bg-gradient-to-r from-green/30 to-transparent"></div>
                            </div>
                            
                             <div>
                                 <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight mb-2">
                                     <TextType
                                         text={name}
                                         typingSpeed={80}
                                         initialDelay={500}
                                         showCursor={true}
                                         cursorCharacter="▎"
                                         cursorClassName="text-green"
                                         className="text-white"
                                         startOnVisible={true}
                                         loop={false}
                                     />
                                 </h2>
                                 <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                                     <TextType
                                         text={description}
                                         typingSpeed={30}
                                         initialDelay={1000}
                                         showCursor={false}
                                         className="text-gray-300"
                                         startOnVisible={true}
                                         loop={false}
                                     />
                                 </p>
                             </div>

                            {/* Project Type Tags */}
                            {type && type.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {type.map((projectType, index) => (
                                        <span 
                                            key={index}
                                            className="px-2 py-1 bg-gradient-to-r from-green/10 to-green/5 border border-green/20 rounded-md text-xs font-medium text-green/80"
                                        >
                                            {projectType}
                                        </span>
                                    ))}
                                </div>
                            )}

                             {/* Tech Stack */}
                             <div className="flex flex-wrap gap-2 sm:gap-3">
                                 {languages.map((lang, index) => (
                                     <span 
                                         key={index}
                                         className="px-3 py-1.5 bg-gradient-to-r from-green/20 to-green/10 border border-green/30 rounded-full text-xs sm:text-sm font-medium text-green transition-all duration-300 hover:from-green/30 hover:to-green/20 hover:border-green/50 hover:scale-105"
                                     >
                                         <TextType
                                             text={lang}
                                             typingSpeed={40}
                                             initialDelay={1500 + (index * 200)}
                                             showCursor={false}
                                             className="text-green"
                                             startOnVisible={true}
                                             loop={false}
                                         />
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
                                {other && other.includes('linkedin') && (
                                    <a 
                                        href={other} 
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
                </div>
            </div>
        </div>
    )
}
