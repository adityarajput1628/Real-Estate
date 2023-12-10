import "./App.css";
import Compaines from "./components/Company/Compaines";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Get Started/Footer/Footer";
import GetStarted from "./components/Get Started/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";

function App() {
  return (
    /*<RouterProvider router={router} />*/
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Compaines />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
