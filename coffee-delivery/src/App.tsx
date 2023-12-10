import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"
import { AlertProvider } from "./contexts/AlertContext";
import { Home } from "./pages/Home"

function App() {

  return (
    <CartProvider>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </CartProvider >
  )
}

export default App
