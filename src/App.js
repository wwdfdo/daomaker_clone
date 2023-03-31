import "./App.css";
import Banner from "./components/Banner/Banner";
import CardsComponent from "./components/CardsComponent/CardsComponent";
import Community from "./components/Community/Community";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import FarmVestingComponent from "./components/FarmVestingComponent/FarmVestingComponent";
import Header from "./components/Header/Header";
import Launchpad from "./components/Launchpad/Launchpad";
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
    </>
  );
}

export default App;
