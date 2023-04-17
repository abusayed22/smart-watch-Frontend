import { Routes, Route } from "react-router-dom";

import Nav from "./partials/nav/Nav";
import Footer from "./partials/footer/Footer";
import {
  Cart,
  Event,
  Home,
  Login,
  Model,
  NotFound,
  Products,
  Register,
} from "./routes/Router";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/events" element={<Event />} />
        <Route path="/models" element={<Model />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
