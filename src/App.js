import { Routes, Route } from "react-router-dom";
// Context
import GamesContextProvider from "./context/GamesContextProvider";
// Components
import Landing from "./pages/Landing";

function App() {
  return (
    <GamesContextProvider>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </GamesContextProvider>
  );
}

export default App;
