import "./App.css";
import AboutUs from "./Component/AboutUs";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Movies from "./Component/Movies";
import User from './Component/User'
import Footer from "./Component/Footer";
import Logo from "./Component/Logo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Logo/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/User/:ID" element={<User />} />
        </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
