import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Home, Contact, Login, Reset, Register} from './pages'
import {Header, Footer} from './components'




function App() {
  return (
    <>
      <BrowserRouter>
          <ToastContainer />
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
