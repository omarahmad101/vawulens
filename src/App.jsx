import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact";
import Gallary from "./Pages/gallary/Gallary";
import Notfound from "./Pages/notFound/Notfound";
import Plans from "./Pages/plans/Plans";
import Trainers from "./Pages/trainers/Trainers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallary />
      <Notfound />
      <Plans />
      <Trainers />
    </BrowserRouter>
  );
}

export default App;
