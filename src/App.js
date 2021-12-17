import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Review from './component/Review/Review';
import Courses from './component/Courses/Courses';
import Contact from './component/Contact/Contact';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (

    <div className="app">
      
      <Router>
      <Navbar></Navbar>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/review" element={<Review/>}/>
                  <Route path="/courses" element={<Courses/>}/>
                  <Route path="/contact" element={<Contact/>}/>
              </Routes>
      </Router>

    </div>

  );
}

export default App;
