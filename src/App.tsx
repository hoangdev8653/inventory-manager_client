import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "./templates/publicLayout";
import { PATH } from "./utils/paths";

function App() {
  return (
    <Routes>
      <Route path={PATH.PUBLIC_LAYOPUT} element={<PublicLayout />} />
      <Route index element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route path="/products" element={<Home />} />
    </Routes>
  );
}

export default App;
