import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Navbar from './pages/home/shared/navbar/Navbar';

function App() {
  return (
    <div className="App">
 
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
