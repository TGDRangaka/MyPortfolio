import HomeSection from '../componets/HomeSection';
import AboutMeSection from '../componets/AboutMeSection';
import ServiceSection from '../componets/ServiceSection';
import ProjectsSection from '../componets/ProjectsSection';

export default function Home() {
  return (
    <div className=''>
      <HomeSection/>
      <AboutMeSection />
      <ServiceSection />
      <ProjectsSection />
    </div>
  )
}
