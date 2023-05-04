import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home/Home'
import { memo } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Home />} />
          <Route path='/singleproduct' element={<Home />} />
          <Route path='/selected' element={<Home />} />
          <Route path='/contacts' element={<Home />} />
          <Route path='/service-requirements' element={<Home />} />
          {/* <Route path='/card' element={<Home />} /> */}
          {/* <Route path='/ordering' element={<Home />} />
        <Route path='/ordered' element={<Home />} /> */}
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default memo(App)
