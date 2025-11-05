import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import NewsDetails from './components/NewsDetails'
import About from './pages/About'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Hero/> }/>
      <Route path="/about" element={ <About/> }/>
      <Route path="/news/:title/:id" element={ <NewsDetails/> }/>
    </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App