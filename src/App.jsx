import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App