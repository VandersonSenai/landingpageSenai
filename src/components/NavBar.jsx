import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import styles from "./NavBar.module.css";
import { AuthContext } from "../contexts/UserContext";
import { useContext } from "react";


const NavBar = () => {
   const { usuarioNome, logout } = useContext(AuthContext);

  return (
        // <Navbar expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
    <Navbar sticky="top" expand="lg" className={`container-fluid py-2 px-0 ${styles.navbar_custom}`}
        style={{ 
        display: 'flex', 
        alignItems: 'center'
    }}
      > 
{/* adicionando thema dark */}
      <Container className="mt-0 p-0 py-0" >
        <Navbar.Brand as={NavLink} to="/home">
{/* adicionando icones aos menus             */}
        <img
              alt="SenaiLogo"
              src="/SenaiLogoBranco.png"
              // src="./logo_senai.svg"
              width="200"
              // height="30"
              className="d-inline-block align-top"
              />{' '}
        </Navbar.Brand>
        <Navbar.Toggle className={styles.text} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto bg" >
            {/* <Nav.Link as={NavLink} className={styles} 
            style={({ isActive }) => {
              return { color: isActive ?
                     'var(--clr-laranja)' : 
                     'var(--clr-text)',
                    transition: 'all 0.2s ease',
                    textDecoration: isActive ? 'underline' : 'none',
                    fontWeight: isActive ? 'bold' : 'normal',
                    fontSize: isActive ? '1.1rem' : '1rem',
                    padding: isActive ? '0.5rem' : '0.5rem',
                    }
              }}
            to="/contato">
            Contato</Nav.Link> */}

            <Nav.Link as={NavLink} className={styles} 
            style={({ isActive }) => {
              return { color: isActive ?
                     'var(--clr-base)' : 
                     'var(--clr-text)',
                    transition: 'all 0.2s ease',
                    textDecoration: isActive ? 'underline' : 'none',
                    fontWeight: isActive ? 'bold' : 'normal',
                    }
              }}
            to="/contato">
            Contato</Nav.Link>
            <Nav.Link as={NavLink} className={styles} 
            style={({ isActive }) => {
              return { color: isActive ?
                     'var(--clr-base)' : 
                     'var(--clr-text)',
                    transition: 'all 0.2s ease',
                    textDecoration: isActive ? 'underline' : 'none',
                    fontWeight: isActive ? 'bold' : 'normal',
                    }
              }}
            to="/historia">
            História</Nav.Link>

            {/* <Nav.Link as={NavLink} className={styles.link} to="/contato">
            Contato</Nav.Link> */}
            <Nav.Link as={NavLink} className={styles.link} to="/sobre">
            Sobre</Nav.Link>
          </Nav>
          <Nav >
            <Navbar.Text className={styles.text} >
             {usuarioNome === "Visitante" ? (
                <>
                  <span>Olá, </span>
                  <Link  as={NavLink} 
                          to="/login" 
                          className={styles.login}>Visitante
                  </Link>
                </>
                ) : (
                <>
                  <span>Olá, </span>
                  <Link  as={NavLink} to="/login" 
                          onClick={logout} 
                          className={styles.login}>{usuarioNome}
                  </Link>
                </>
              )}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            

  )
}

export default NavBar