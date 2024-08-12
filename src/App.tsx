import Home from  './pages/Home';
import MobileNavbar from './componets/MobileNavbar';
import Footer from './componets/Footer';

function App() {

  return (
    <div className='w-screen overflow-hidden'>
      <MobileNavbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
