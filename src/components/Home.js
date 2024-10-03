import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { Info } from "./Info";
import { AboutUs } from "./AboutUs"
import { Element, scroller } from 'react-scroll';
import { Contact, FindUs } from "./FindUs";

export const Home = () => {

  const scrollToComponent = (componentName) => {
    scroller.scrollTo(componentName, {
      duration: 40,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };


  return (
    <div className="App">
      <NavBar />
      <Info scrollToComponent={scrollToComponent} />
      {/* <Element name="FindUs"> */}
      <FindUs />
      {/* </Element> */}
      {/* <Element name="AboutUs"> */}
      <AboutUs />
      {/* </Element> */}
    </div>
  );
}

export default Home;
