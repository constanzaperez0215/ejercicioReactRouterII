import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [id, setId] = useState('')
  const navigate = useNavigate()
  const irAPersonajes = () => {
    navigate(`/personajes/${id}`)
  }
  return (
    <>
      <h1>Home</h1>
      <input
        type='text'
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button onClick={irAPersonajes}>Buscar</button>
    </>
  )
}

export default Home
