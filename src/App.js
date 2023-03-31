import "./App.css";
import Banner from "./components/Banner/Banner";
import CardsComponent from "./components/CardsComponent/CardsComponent";
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
    </>
  );
}

export default App;
