import { Routes, Route } from "react-router-dom";
// Context
import GamesContextProvider from "./context/GamesContextProvider";
import PopularContextProvider from "./context/PopularContextProvider";
// Components
import Landing from "./pages/Landing";

function App() {
  return (
    <GamesContextProvider>
      <PopularContextProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </PopularContextProvider>
    </GamesContextProvider>
  );
}

export default App;
