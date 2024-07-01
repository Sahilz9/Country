import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Favourite from "./Favourite";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourite" element={<Favourite />} />
    </Routes>
  );
};

export default AllRoutes;
