import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import About from './pages/Home/About/About';
import InHome from './pages/Home/InHome/InHome';
import Resume from './pages/Home/Resume/Resume';
import Contact from './pages/Home/Contact/Contact';
import Projects from './pages/Home/Projects/Projects/Projects';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="font-style">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<InHome></InHome>}/>
          <Route path="project" element={<Projects></Projects>}/>
          <Route path="/Project/:id" element={<ProjectDetail />}></Route>
          <Route path="about" element={<About/>}/>
          <Route path="resume" element={<Resume/>}/>
          <Route path="contact" element={<Contact/>}/>
          
        </Route>
        <Route
            path="*"
            element={<NotFound />}
          />
      </Routes>
      </Router>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
