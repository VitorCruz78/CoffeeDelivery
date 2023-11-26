import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider >
  )
}

export default App
