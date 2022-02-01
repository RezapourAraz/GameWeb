import { Routes, Route } from "react-router-dom";
// Context
import GamesContextProvider from "./context/GamesContextProvider";
import PopularContextProvider from "./context/PopularContextProvider";
// Components
import Landing from "./pages/Landing";
import Games from "./pages/Games";
import Detaile from "./pages/Detaile";
function App() {
  return (
    <GamesContextProvider>
      <PopularContextProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/games' element={<Games />} />
          <Route path='/detaile/:id' element={<Detaile />} />
        </Routes>
      </PopularContextProvider>
    </GamesContextProvider>
  );
}

export default App;
