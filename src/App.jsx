import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import NavigationBar from "./component/Header/NavigationBar";
import Home from "./component/Home";
import Cart from "./component/Cart";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
