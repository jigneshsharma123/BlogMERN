import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App