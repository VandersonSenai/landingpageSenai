import styles from "./Estilos.module.css";
import React from 'react'
import { useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Contato from "../components/Contato";
import CardCursoDetalhe from "../components/CardCursoDetalhe";


const ContatoSite = () => {
  const navigate                  = useNavigate();
  const voltarPaginaAnterior = () => {
    navigate(-1); 
  };

  return (
    <div className={styles.divPagina}>
    <Container fluid> 
        <Row className="py-5 justify-content-center">
            <Col xs={12} md={6} lg={4}>
              
                  <h2 className="text-start">
                    Seja bem vindo, cadastre seus dados de contato.
                  </h2>
                  <hr />
                  <p className="text-start">
                    Após o cadastro, podera realizar o login com suas próprias informações.
                  </p>
                  <h4 className="text-start">
                    Duvidas entre em contato.
                  </h4>
                    <p className="text-start px-1">
                    Telefone / Whatsapp : 
                    <a className="text-start px-2 " href="https://api.whatsapp.com/send?phone=5527999999999&text=Olá%20gostaria%20de%20mais%20informações%20sobre%20o%20curso" target="_blank" rel="noopener noreferrer">
                      27 99999-9999</a>
                  </p>
            </Col>    
            <Col xs={12} md={6} lg={4}>
              <Contato page="contatolink"/> 
            </Col>    
         
        </Row>
          <div className='py-1 m-0 p-3 justify-content-start'>
            <Button className="" 
                variant="outline-info" 
                size="lg"
                onClick={voltarPaginaAnterior}>
                   Voltar 
            </Button>
          </div>
      </Container>
      </div>
  )
}

export default ContatoSite