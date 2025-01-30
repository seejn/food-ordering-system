import { useState, useContext, createContext, useEffect } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {


  const [items, setItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);


  const addToCart = (item) => {
    setItems(prevItems => [...prevItems, item])
  }

  const removeFromCart = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.cartId !== id)
    })
  }

  const getTotal= () => {
    return items.reduce((acc,item) => acc + item.total_price, 0)
  }

  return (
    <CartContext.Provider value={{ items, setItems, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
