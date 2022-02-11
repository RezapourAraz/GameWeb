import React, { useEffect } from "react";
import { Routes, Route , Navigate } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import fetchGames from "./actions/gameAction";
// Components
import Landing from './pages/Landing';
import Games from './pages/Games';
import Detaile from './pages/Detaile';
import WishList from "./pages/WishList";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames())
  },[dispatch])

  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/games" element={<Games />} />
        <Route path="/detaile/:id" element={<Detaile />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/*" element={<Navigate to="/" />}/>
      </Routes>
  );
}

export default App;
