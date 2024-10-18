import SocialIcons from "./SocialIcons";

export default function HomeSection() {
  return (
    <div id='home' className='w-screen min-h-svh flex flex-col overflow-hidden relative  lg:flex-row'>
      <span className='absolute w-line border-y border-green/10 bottom-0 origin-bottom-left -rotate-45  lg:-rotate-line'></span>
      <div className='flex-grow flex flex-col justify-center relative px-5 lg:px-10  xl:flex-grow-0  animate__animated animate__bounceInLeft'>
        <span className='gradient w-400 aspect-square absolute rounded-full -left-1/2 -top-1/2  md:-left-1/3  lg:w-800 lg:-left-96'></span>

        <p className='text-4xl font-bold mt-28  xsm:text-5xl  sm:text-6xl lg:text-7xl  2xl:text-8xl'>Dilshan Rangaka</p>
        <div className='mt-2  xsm:text-xl  lg:mt-4 lg:text-xl  2xl:text-2xl'>
          <span className=' text-white/80'>Fullstack Developer</span>
          <span className='border-l ml-4 pl-4 text-white/50'>Indie Game Developer</span>
        </div>

        <div className='mt-2 flex h-8 gap-2  sm:h-10 lg:h-10 items-center lg:mb-28 lg:gap-5 lg:mt-6'>
          <button type='button' className='bg-green text-black rounded px-8 h-full  sm:px-10  lg:px-14  hover:scale-110 duration-150 hover:-rotate-6 hover:translate-y-2 hover:bg-white'>
            <a href="#contactme" className='font-bold text-base  lg:text-lg'>Hire Me</a>
          </button>
          <SocialIcons />
        </div>
      </div>

      <div className=' relative flex justify-center  lg:items-end lg:flex-grow  animate__animated animate__bounceInRight'>

        <span className='gradient w-400 aspect-square absolute rounded-full -right-1/2 -bottom-1/2  md:left-1/2  lg:w-800 lg:left-52'></span>

        <img src="/home.png" alt="profile picture" className='w-72 h-fit  sm:w-80  lg:w-80 2xl:w-120' />
      </div>
    </div>
  )
}
