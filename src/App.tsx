import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TravelTips from "./pages/travel-tips/TravelTips";
import SingleCity from "./pages/single-city/SingleCity";
import Safety from "./pages/safety/Safety";
import Footer from "./components/footer/Footer";
import Questions from "./pages/questions/Questions";
import Tourists from "./pages/tourists/Tourists";
import SingleTourism from "./pages/single-tourism/SingleTourism";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cities`
      );
      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <Router>
        
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/travel-tips"} element={<TravelTips />} />
          <Route path="safety" element={<Safety />} />
          <Route path="questions" element={<Questions />} />
          <Route path="tourists" element={<Tourists />} />
          <Route path="tourism">
            <Route path=":id" element={<SingleTourism />} />
          </Route>
          <Route path="city">
            <Route path=":id" element={<SingleCity />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
