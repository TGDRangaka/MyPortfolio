import Title from './Title'
import technologies from '../data/technologies'

export default function AboutMeSection() {
  return (
    <div id='aboutme' className='w-screen'>
      <Title text='Know' title='About Me' />

      <div className='px-12'>
        {/* about me image */}
        <div className='mb-7 flex justify-center items-center relative'>
          <hr className='-z-10 border-green/20 w-line absolute rotate-aboutme-line' />
          <hr className='-z-10 border-green/20 w-line absolute -rotate-aboutme-line' />
          <div className="gradient w-96 aspect-square absolute rounded-full delay-1000"></div>
          <img className='w-40' src='/aboutme.png' alt='dilshan' />
        </div>

        {/* info */}
        <div className='flex flex-col gap-5'>
          <p className='text-sm font-thin'>
            <em className='text-black'>lorem</em> I'm Dilshan Rangaka, a versatile full-stack developer experienced in Java, web development and mobile development. I'm passionate about crafting innovative solutions and user-friendly experiences. My dedication to clean code and a user-centric approach sets me apart. Let's collaborate to turn your ideas into reality.
          </p>
          <hr className='border-2 rounded-sm' />

          <h3 className='text-lg font-bold'>
            Soft Skills
            <ul className='list-disc ml-8 mt-2 font-normal text-base'>
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Good Communication</li>
              <li>Quick Learner</li>
              <li>Planning | Management</li>
              <li>Leadership</li>
            </ul>
          </h3>

          <div className='flex justify-center'>
            <a className='bg-green rounded-md text-black font-bold text-lg w-fit px-10 py-2' href="/cv.pdf" download>Download CV</a>
          </div>
        </div>

        <div className='flex flex-wrap justify-center mt-5 gap-3 mb-10'>
          {
            technologies.map(tech => <img className='w-10' title={tech.name} src={tech.image} alt={tech.image} />)
          }
        </div>
      </div>
    </div>
  )
}
