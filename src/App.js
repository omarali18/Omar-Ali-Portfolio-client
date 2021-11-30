import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
          <Route path="/Project/detail/:id" element={<ProjectDetail />}></Route>
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
