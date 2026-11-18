import Header from './components/Header/Header'
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SongsList from './components/SongsList'
import { Cart } from './components/Cart/Cart'
import { Navigate, Route, Routes, useMatch } from 'react-router'
import { useSelector } from 'react-redux'
import LoginForm from './components/LoginForm/LoginForm'
import RegisterForm from './components/RegisterForm/RegisterForm'
import CheckoutForm from './components/CheckoutForm/CheckoutForm'
import PostCheckOut from './components/PostCheckout/PostCheckout'



function App() {
  const [query, setQuery] = useState("");
  const isCatalog = useMatch("/");

  const cartItems = useSelector((state) => state.cart.items);
  const { items: orderItems, status } = useSelector((state) => state.order);

  const hasCartItems = cartItems.length > 0;
  const hasConfirmedOrder = status === "succeeded" && orderItems.length > 0;
  

  return (
    <main>
      <Header cartCount={cartItems.length}>
        {isCatalog && <SearchBar query={query} setQuery={setQuery} />}
      </Header>
      
      <Routes>
        <Route path="/" element={<SongsList query={query} />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path='/login' element={ <LoginForm />} />
        <Route path='/register' element={ <RegisterForm />} />
        <Route path="/checkout" element={hasCartItems ? <CheckoutForm /> : <Navigate to="/cart" replace />} />
        <Route path="/post-checkout" element={hasConfirmedOrder ? <PostCheckOut /> : <Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}

export default App
