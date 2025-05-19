
import './App.css'
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/UserContext";

function App() {

  return (
    <>
      <AuthProvider>
      <div className="App ">

        <Container className="container-fluid py-0 px-0 ">
            <NavBar  />

            <Outlet />

            <Footer />
        </Container>
          

      </div>
      </AuthProvider>
    </>
  )
}

export default App
