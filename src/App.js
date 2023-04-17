import { Routes,Route } from "react-router-dom";

import Nav from "./partials/nav/Nav";
import Footer from "./partials/footer/Footer";
import { Cart, Home, NotFound } from "./routes/Router";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
