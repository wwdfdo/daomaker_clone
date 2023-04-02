import "./App.css";
import Banner from "./components/Banner/Banner";
import CardsComponent from "./components/CardsComponent/CardsComponent";
import Community from "./components/Community/Community";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import FarmVestingComponent from "./components/FarmVestingComponent/FarmVestingComponent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InfiniteSlider from "./components/InfiniteSlider/InfiniteSlider";
import Launchpad from "./components/Launchpad/Launchpad";
import Newsletter from "./components/Newsletter/Newsletter";
import StakeComponent from "./components/StakeComponent/StakeComponent";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CardsComponent />
      <Launchpad />
      <StakeComponent />
      <FarmVestingComponent />
      <Community />
      <Ecosystem />
      <InfiniteSlider animation="animate" clas="first-slider" />
      <InfiniteSlider animation="leftslider" clas="second-slider" />
      <InfiniteSlider animation="animate" clas="third-slider" />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
