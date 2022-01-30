import { Routes, Route } from "react-router-dom";
// Components
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
    </Routes>
  );
}

export default App;
