import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityPage from "./components/Reads/CityPage.js"
import { Home } from "./components/Home"
import { Element, scroller } from 'react-scroll';
import { Contact, FindUs } from "./components/FindUs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const scrollToComponent = (componentName) => {
    scroller.scrollTo(componentName, {
      duration: 40,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };


  return (
    <div className="Appmain">
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:cityName" element={<CityPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
