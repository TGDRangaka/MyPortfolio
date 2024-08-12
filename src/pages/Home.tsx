import HomeSection from '../componets/HomeSection';
import AboutMeSection from '../componets/AboutMeSection';
import ServiceSection from '../componets/ServiceSection';
import ProjectsSection from '../componets/ProjectsSection';
import Contact from '../componets/Contact';

export default function Home() {
  return (
    <div className=''>
      <HomeSection/>
      <AboutMeSection />
      <ServiceSection />
      <ProjectsSection />
      <Contact/>
    </div>
  )
}
