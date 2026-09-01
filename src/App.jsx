import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import EquipmentPage from './pages/EquipmentPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
function App (){


  return(

    <>
    <Navbar />
    <Routes>
  <Route path="/about" element={<AboutPage />} />
  <Route path="/" element={<LandingPage />} />
  <Route path="/equipment" element={<EquipmentPage />} />
  <Route path="/contact" element={<ContactPage />} />

    </Routes>
     <Footer />
    </>
  )
}

export default App