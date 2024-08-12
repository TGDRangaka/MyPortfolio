import SocialIcons from "./SocialIcons";

export default function HomeSection() {
  return (
    <div id='home' className='w-screen h-dvh flex flex-col overflow-hidden relative'>
      <span className='absolute w-line border-y border-green/10 top-1/3 origin-left rotate-45'></span>
      <div className='flex-grow flex flex-col justify-center relative px-5'>
        <span className='gradient w-400 aspect-square absolute rounded-full -left-1/2 -top-1/2'></span>
        <p className='text-4xl font-bold mt-28'>Dilshan Rangaka</p>
        <div className='mt-2'>
          <span className=''>Fullstack Developer</span>
          <span className='border-l ml-4 pl-4 '>Student</span>
        </div>

        <div className='mt-2 flex h-8 gap-2'>
          <button type='button' className='bg-green text-black rounded px-8 '>
            <a href="#contactme" className='font-bold text-base '>Hire Me</a>
          </button>
          <SocialIcons />
        </div>
      </div>

      <div className=' relative flex justify-center'>
        <span className='gradient w-400 aspect-square absolute rounded-full -right-1/2 -bottom-1/2'></span>
        <img src="/home.png" alt="profile picture" className='w-72' />
      </div>
    </div>
  )
}
