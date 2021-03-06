import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Search1 from "./pages/search1/Search1";
import Carousel from "./pages/carousel/Carousel";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='search-1' element={<Search1 />} />
        <Route path='tour-packages'>
          <Route path='carousel' element={<Carousel />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
