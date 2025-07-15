import "./App.css";
import Login from "./pages/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home/Home";
import ProtectedRoutes from "./util/ProtectedRoutes";
import IsLogin from "./util/IsLogin";
import Display from "./pages/home/Display";
import Recipe from "./pages/home/Recipe";
import Saved from "./pages/home/Saved";
import ViewRecipe from "./pages/home/ViewRecipe";
import Redirect from "./pages/home/Redirect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<IsLogin />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />}>
              <Route path="/home" element={<Display />} />
              <Route path="/Recipe" element={<Recipe />} />
              <Route path="/Saved" element={<Saved />} />
              <Route path="/saved/:id" element={<ViewRecipe />} />
            </Route>
          </Route>
          <Route path="/redirect" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
