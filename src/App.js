import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path='/create' element = {<Create />} />
            <Route path='/blogs/:id' element = {<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
