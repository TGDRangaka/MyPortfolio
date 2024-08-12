import { useState } from "react"

export default function MobileNavbar() {

  const [isNavbarOpen, setNavbar] = useState(false);

  return (
    <header className='w-full  fixed z-50'>
      <div className="bg-black/10 backdrop-blur-md flex justify-between py-1 px-4 border-b border-green/15">
        <a href="#home"><img src='/logo.png' alt='logo' className='h-8' /></a>
        <button type="button" onClick={() => setNavbar(!isNavbarOpen)}>
          <img src='/menu.png' alt='logo' className='h-8' />
        </button>
      </div>


      {isNavbarOpen && <nav className="fixed right-0 top-0 bg-black/90 backdrop-blur-md w-screen h-screen flex justify-center items-center text-lg font-bold z-50" onClick={() => setNavbar(!isNavbarOpen)}>
        <ul className="flex flex-col gap-8 text-center">
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutme">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contactme">Contact</a></li>
        </ul>
      </nav>}
    </header>
  )
}
