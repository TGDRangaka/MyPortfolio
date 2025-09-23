import HomeSection from '../componets/HomeSection';
import AboutMeSection from '../componets/AboutMeSection';
import ServiceSection from '../componets/ServiceSection';
import ProjectsSection from '../componets/ProjectsSection';
import Contact from '../componets/Contact';
import AwardedProjects from '../componets/AwardedProjects';
import SEO from '../components/SEO';

export default function Home() {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dilshan Rangaka",
    "jobTitle": "Full Stack Developer",
    "description": "Experienced Full Stack Developer specializing in React, Node.js, Java, and modern web technologies",
    "url": "https://dilshan-rangaka.vercel.app/",
    "image": "https://dilshan-rangaka.vercel.app/home.png",
    "sameAs": [
      "https://github.com/tgdrangaka",
      "https://linkedin.com/in/dilshan-rangaka",
      "https://instagram.com/tgd_rangaka"
    ],
    "knowsAbout": [
      "JavaScript", "TypeScript", "React", "Node.js", "Java", "Spring Boot",
      "MongoDB", "PostgreSQL", "Full Stack Development", "Web Development", "Mobile Development"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "IJSE - Institute of Java Software Engineering"
    },
    "nationality": {
      "@type": "Country",
      "name": "Sri Lanka"
    }
  };

  return (
    <>
      <SEO 
        title="Dilshan Rangaka - Full Stack Developer & Software Engineer | Portfolio"
        description="Experienced Full Stack Developer specializing in React, Node.js, Java, and modern web technologies. View my portfolio showcasing innovative projects and software solutions."
        keywords="Dilshan Rangaka, Full Stack Developer, Software Engineer, React Developer, Java Developer, Web Development, Mobile Development, Portfolio, Sri Lanka Developer, GDSE, Frontend Developer, Backend Developer"
        url="https://dilshan-rangaka.vercel.app/"
        structuredData={homeStructuredData}
      />
      <div className=''>
        <HomeSection/>
        <AboutMeSection />
        <ServiceSection />
        <AwardedProjects/>
        <ProjectsSection />
        <Contact/>
      </div>
    </>
  )
}
