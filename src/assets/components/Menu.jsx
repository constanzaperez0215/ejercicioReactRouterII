import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Menu() {
  const setActiveClass = ({ isActive }) => (isActive ? "menu active" : "menu");

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" ms-auto">
          <NavLink to="/" className={setActiveClass} >Home</NavLink>
          {" - "}
          <NavLink to="/personajes" className={setActiveClass}>Link</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}
 
