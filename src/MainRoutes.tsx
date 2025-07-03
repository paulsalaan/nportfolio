import MainLayout from "./layout/MainLayout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ViewAllStacks from "./pages/ViewAllStacks";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/viewallstack" element={<ViewAllStacks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
