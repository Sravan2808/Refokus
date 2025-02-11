import Cards from "./Components/Cards";
import Marquees from "./Components/Marquees";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Stripes from "./Components/Stripes";
import Work from "./Components/Work";

function App() {
  return (
    <div className='w-full h-full  bg-zinc-900 font-["satoshi"] text-white'>
      <NavBar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
    </div>
  );
}

export default App;
