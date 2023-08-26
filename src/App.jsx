import Nav from "./Components/nav";
import Assessments from "./Components/Assessments";
import Statistics from "./Components/Statistics";
import SlidingMenu from "./Components/SlidingMenu";
function App() {
  return (
    <div className="md:flex items-start justify-start  md:bg-gray-100">
      <div className="hidden md:inline-block md:bg-white">
        <SlidingMenu />
      </div>
      <div className="bg-white md:mx-4 md:rounded-xl md:max-h-[650px]">
        <Nav />
        <Statistics />
        <Assessments />
      </div>
    </div>
  );
}

export default App;
