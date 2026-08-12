import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import EquipmentPage from './pages/EquipmentPage'
import AboutPage from './pages/AboutPage'
function App (){


  return(

    <>
    <Navbar />
    <Routes>
  <Route path="/about" element={<AboutPage />} />
  <Route path="/" element={<LandingPage />} />
  <Route path="/login" element={<EquipmentPage />} />

    </Routes>
    </>
  )
}

export default App