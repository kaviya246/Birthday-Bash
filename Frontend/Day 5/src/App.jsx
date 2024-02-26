import './App.css'
import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import Registration from './Pages/Registration'
import Home from './Pages/Home'
import Cakes from './Pages/Cakes'
import Entertainment from './Pages/Entertainment'
import Photography from './Pages/Photography'
import AppNavbar from './Components/AppNavbar'
import ImageCarousel from './Pages/ImageCarousel'
import Return from './Pages/Return'
import Foods from './Pages/Foods'
import Decorations from './Pages/Decorations'
import Venues from './Pages/Venues'
import VenueSlide from './Pages/VenueSlide'
import Footer from './Components/Footer'
import ProfilePage from './Pages/ProfilePage'
import LandingPage from './Pages/LandingPage'
import Enterslide from './Pages/Enterslide'
import Photoslide from './Pages/Photoslide'
import AdminPage from './Pages/AdminPage'
import Carddetails from './Pages/Carddetails'
import AdminCard from './Pages/AdminCard'
import AdminNavbar from './Components/AdminNavbar'
import AdminHome from './Pages/AdminHome'
import AdminVenue from './Pages/AdminVenue'
import AdminEntertainment from './Pages/AdminEntertainment'
import AdminPhotography from './Pages/AdminPhotography'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<Registration/>} />
      <Route path="/nav" element={<AppNavbar/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cakes" element={<Cakes/>}/>
      <Route path="/return" element={<Return/>}/>
      <Route path="/entertainment" element={<Entertainment/>}/>
      <Route path="/Photography" element={<Photography/>}/>
      <Route path="/image" element={<ImageCarousel/>}/>
      <Route path="/foods" element={<Foods/>}/>
      <Route path="/deco" element={<Decorations/>}/>
      <Route path='/venue'element={<Venues/>}/>
      <Route path='/slide' element={<VenueSlide/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/land' element={<LandingPage/>}/>
      <Route path='/enterslide' element={<Enterslide/>}/>
      <Route path='/slidephoto' element={<Photoslide/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/details' element={<Carddetails/>}/>
      <Route path='/admincard' element={<AdminCard/>}/>
      <Route path='/AdminNavbar' element={<AdminNavbar/>}/>
      <Route path='/adminhome' element={<AdminHome/>}/>
      <Route path="/adminvenue" element={<AdminVenue/>}/>
      <Route path="/adminenter" element={<AdminEntertainment/>}/>
      <Route path="/adminphoto" element={<AdminPhotography/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
