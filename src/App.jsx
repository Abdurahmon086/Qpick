import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home/Home'
import { memo } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SingleProduct from './page/SingleProduct/SingleProduct'
import ServiceRequirements from './page/ServiceRequirements/ServiceRequirements'
import Contacts from './page/Contacts/Contacts'
import ErrorCard from './components/Error/ErrorCard'
import Selected from './page/Selected/Selected'
import Ordering from './page/Ordering/Ordering'
import Ordered from './page/Ordered/Ordered'

function App() {

  return (
    <>
      <div className="all">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products'>
              <Route path='/products/singleproduct/:id' element={<SingleProduct />} />
            </Route>
            <Route path='/service-requirements' element={<ServiceRequirements />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/s' element={<ErrorCard />} />
            <Route path='/card' element={<Selected />} />
            <Route path='/ordering' element={<Ordering />} />
            <Route path='/ordered' element={<Ordered />} />
            {/* <Route path='/selected' element={<Home />} /> */}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default memo(App)
