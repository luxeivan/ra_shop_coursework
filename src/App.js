import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Main from './pages/Main';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import Page404 from './pages/Page404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="container">

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:id' element={<Catalog />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<Page404 />} />
          </Routes>

        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
