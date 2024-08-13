import Home from './pages/Home';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';

import Aos from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
      Aos.init();
  },[])

  return (
    <BrowserRouter>
      <div className='w-screen overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        {/* <Home /> */}
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
