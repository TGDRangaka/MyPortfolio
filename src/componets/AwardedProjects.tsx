
import AwardProjectCard from './cards/AwardProjectCard';
import awardProjects from '../data/awardProjects';
import Title from './Title';

export default function AwardedProjects() {
  return (
    <div id='achivements' className="w-screen">
        <Title text="My" title="Achivements" />
        
        <div className="flex justify-center px-4 pb-10">
            {
                awardProjects.map((project, index) => (
                    <AwardProjectCard key={index} project={project} />
                ))
            }
        </div>
    </div>
  )
}
