import { Routes, Route } from "react-router-dom";
// Context
import GamesContextProvider from "./context/GamesContextProvider";
import PopularContextProvider from "./context/PopularContextProvider";
import WishContextProvider from "./context/WishContextProvider";
// Components
import Landing from "./pages/Landing";
import Games from "./pages/Games";
import Detaile from "./pages/Detaile";
import WishList from "./pages/WishList";

function App() {
  return (
    <GamesContextProvider>
      <PopularContextProvider>
        <WishContextProvider>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/games' element={<Games />} />
            <Route path='/detaile/:id' element={<Detaile />} />
            <Route path='wishlist' element={<WishList />} />
          </Routes>
        </WishContextProvider>
      </PopularContextProvider>
    </GamesContextProvider>
  );
}

export default App;
