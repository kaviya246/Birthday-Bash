import './App.css'
import LoginPage from './Pages/LoginPage'
import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import Registration from './Pages/Registration'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<Registration/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
