import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Home from "./component/Home";
import Cart from "./component/Cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
