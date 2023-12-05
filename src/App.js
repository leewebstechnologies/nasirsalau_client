import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Practice from "./pages/practice/Practice";
import Team from "./pages/team/Team";
import Faq from "./pages/faq/Faq";
import Contact from "./pages/contact/Contact";
import Subscribe from "./components/subscribe/Subscribe";
import Choose from "./pages/choose/Choose";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Choose />
      <Practice />  
      <Team />
      <Faq />
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
