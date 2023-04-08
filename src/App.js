import { Routes,Route } from "react-router-dom";
import Home from './components/home/Home'
import Cart from './components/cart/Cart'
import NotFound from "./partials/notFundPage/NotFound";
import Nav from "./partials/nav/Nav";
import Footer from "./partials/footer/Footer";

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
