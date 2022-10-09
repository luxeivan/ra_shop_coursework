import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Main from './pages/Main';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import Page404 from './pages/Page404';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { useEffect } from 'react';
import { syncFromLocalStorage } from './store/cartSlice';
import { useDispatch } from 'react-redux';
import Successorder from './pages/Successorder';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(syncFromLocalStorage())
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="container">

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:id' element={<Product />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Page404 />} />
            <Route path='/successorder' element={<Successorder />} />
          </Routes>

        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
