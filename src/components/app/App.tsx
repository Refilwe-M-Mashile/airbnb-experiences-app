import { NavBar, Hero, Card } from "../index";
import { katie } from "../../assets";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Card
        img={katie}
        title="Life lessons with Katie Zaferes"
        rateCount={6}
        rating={5.0}
        country="USA"
        price={136}
      />
    </div>
  );
}

export default App;
