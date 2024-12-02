import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './component/pages/Home'
import Header from './component/layout/Header'
import About from './component/pages/About'
import Brand from './component/pages/Brand'
import Ourteam from './component/pages/Ourteam'
import Footer from './component/layout/Footer'
import Pressrelese from './component/pages/Pressrelese'
import Contacts from './component/pages/Contacts'
import Carrier from './component/pages/Carrier'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/pressrelese" element={<Pressrelese />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/carrier" element={<Carrier/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
