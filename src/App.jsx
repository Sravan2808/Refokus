import NavBar from "./Components/NavBar"
import Stripes from "./Components/Stripes"
import Work from "./Components/Work"

function App() {
  return <div className='w-full h-screen  bg-zinc-900 font-["satoshi"] text-white'>
    <NavBar />
    <Work />
    <Stripes />
  </div>
}

export default App
