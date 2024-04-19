import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './assets/components/Menu'
import { Home, Contacto, Personajes, NotFound } from './assets/layouts'

const App = () => {
  return (
    <div className='App'>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/personajes/:id' element={<Personajes />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>

  )
}

export default App
