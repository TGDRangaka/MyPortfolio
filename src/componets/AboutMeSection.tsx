import Title from './Title'
import technologies from '../data/technologies'

export default function AboutMeSection() {
  return (
    <div id='aboutme' className='w-screen flex flex-col item-center px-12 '>
      <Title text='Know' title='About Me' />

      <div className='flex flex-col  lg:flex-row lg:gap-5 lg:justify-center lg:mb-5'>
        {/* about me image */}
        <div className='mb-7 flex justify-center items-center relative  lg:mb-0'>
          <hr className='-z-10 border-green/20 w-line lg:w-xline absolute rotate-aboutme-line' />
          <hr className='-z-10 border-green/20 w-line lg:w-xline absolute -rotate-aboutme-line' />
          <div className="gradient w-120 aspect-square absolute rounded-full  md:w-400  lg:w-800 lg:-right-1/3 lg:-top-2/3"></div>

          <img className='w-40  sm:w-52  md:w-72  lg:w-96  2xl:w-auto' src='/aboutme.png' alt='dilshan'  data-aos="flip-up" data-aos-offset="250"/>
        </div>

        {/* info */}
        <div className='flex flex-col gap-5  lg:w-400 lg:justify-center lg:gap-10'  data-aos="fade-left">
          <p className='text-sm font-thin  sm:text-base  xl:text-lg'>
            <em className='text-black'>lorem</em> I'm Dilshan Rangaka, a versatile full-stack developer experienced in Java, web development and mobile development. I'm passionate about crafting innovative solutions and user-friendly experiences. My dedication to clean code and a user-centric approach sets me apart. Let's collaborate to turn your ideas into reality.
          </p>

          <hr className='border-2 rounded-sm border-white/50' />

          <h3 className='text-lg font-bold  md:text-xl'>
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
            <a className='bg-green rounded-md text-black font-bold text-lg w-fit px-10 py-2  2xl:text-2xl 2xl:px-14 2xl:py-3  hover:scale-110 duration-150 hover:-rotate-6 hover:translate-y-2 hover:bg-white' href="/cv.pdf" download>Download CV</a>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-10 gap-3 mb-10  lg:gap-8 lg:px-32  2xl:px-80 2xl:gap-14'>
        {
          technologies.map(tech => <img className='w-10  sm:w-12  lg:w-14  2xl:w-20  hover:scale-110 duration-75 hover:rotate-12' title={tech.name} src={tech.image} alt={tech.image}  data-aos="zoom-out-up"/>)
        }
      </div>
    </div>
  )
}
