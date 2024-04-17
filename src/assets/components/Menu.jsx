import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Menu () {
  const setActiveClass = ({ isActive }) => (isActive ? 'menu active' : 'menu')

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink to='/' className={setActiveClass}>
              Home
            </NavLink>
            {' - '}
            <NavLink to='/personajes' className={setActiveClass}>
              Personajes
            </NavLink>
            {' - '}
            <NavLink to='/contacto' className={setActiveClass}>
              Contacto
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
