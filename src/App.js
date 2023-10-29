import TopPicks from "./components/TopPicks";
import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";
import Meals from "./components/Meals";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meals/>
      <Categories/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
