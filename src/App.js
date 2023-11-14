import Nav from "./components/nav/Nav";
import Cases from "./pages/cases/Cases";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Practice from "./pages/practice/Practice";
import Team from "./pages/team/Team";
import Faq from "./pages/faq/Faq";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Practice />
      <Cases />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
