import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";
import { useEffect, useState } from "react";

export default function App() {

  const [ingredients, setIngredients] = useState({
    cheese: false,
    pepperoni: false,
    tomato: false,
    mushroom: false,
    basil: false,
    olive: false,
  })

  useEffect(() => {
    const data = localStorage.getItem("ingredients")
    if (data) {
      setIngredients(JSON.parse(data))
    }
  }, [])

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Customize ingredients={ingredients} setIngredients={setIngredients} />} />
        <Route path="/checkout" element={<Checkout ingredients={ingredients} />} />
      </Routes>
    </BrowserRouter>
  )
}
