import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact";
import Gallary from "./Pages/gallary/Gallary"
import Notfound from "./Pages/notFound/Notfound";
import Plans from "./Pages/plans/Plans";
import Trainers from "./Pages/trainers/Trainers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
 <Routes>
  <Route index element={<Home />}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='Gallery' element={<Gallary />}/>
  <Route path='plans' element={<Plans/>}/>
  <Route path='trainers' element={<Trainers/>}/>
  <Route path='*' element={<Notfound/>}/>
 </Routes>
 <Footer />
    </BrowserRouter>
  );
}

export default App;
