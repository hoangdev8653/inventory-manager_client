import Home from "./pages/user/Home";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "./templates/publicLayout";
import PrivateLayout from "./templates/privateLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/admin/Dashboard";
import { PATH } from "./utils/paths";

function App() {
  return (
    <Routes>
      <Route path={PATH.PUBLIC_LAYOPUT} element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
      </Route>
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.REGISTER} element={<Register />} />
      <Route path={PATH.DASHBOARD} element={<Dashboard />} />
    </Routes>
  );
}

export default App;
