import "./App.css";
import Client from "./components/Client/Client";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home";
import Intro from "./components/Intro/Intro";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import PracticeArea from "./components/PracticeArea/PracticeArea";
import SuccessCard from "./components/SuccessCard/SuccessCard";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Home />
      <Intro />
      <SuccessCard />
      <PracticeArea />
      <Client />
      <Team />
      <FAQ />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
