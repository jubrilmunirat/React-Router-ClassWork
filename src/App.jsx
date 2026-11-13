import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import About from './page/About'
import Product from './page/Product'
import ProductDetails from './page/ProductDetails'
import Project from './page/Project'
import Contact from './page/Contact'
import ProjectDetails from './page/ProjectDetails'
// import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      {/* <Navbar /> This stays visible across all pages */}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
      </Routes>
    </div>
  )
}

export default App