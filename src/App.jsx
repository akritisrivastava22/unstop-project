import Nav from "./Components/nav";
import Assessments from "./Components/Assessments";
import Statistics from "./Components/Statistics";
import SlidingMenu from "./Components/SlidingMenu";
function App() {
  return (
    <div className="lg:flex">
      <SlidingMenu />
      <div>
        <Nav />
        <Statistics />
        <Assessments />
      </div>
    </div>
  );
}

export default App;
