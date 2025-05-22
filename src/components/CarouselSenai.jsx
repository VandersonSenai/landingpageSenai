import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function CarouselSenai() {
  return (

    <Container>

    
    <Row>
      <Col xs={12} md={12} className="text-center">

        <Carousel style={{ width: "100%"}} 
                  data-bs-theme="dark" 
                  fade={true} 
                  interval={2000} 
                  slide={true} 
                  aria-hidden={true} 
                  className='mb-5 mt-3' 
                  indicators={false}>	
          <Carousel.Item>
            <a href="https://loja.senaies.com.br/" target="_blank" rel="noopener noreferrer">
            <img
              className="d-block "
              src="/carousel_imagem_02.png"
              alt="Curos Senai"
            />
            </a>
          </Carousel.Item>    
                    <Carousel.Item>
            <Link to="/historia">
              <img
                className="d-block"
                src="/carousel_imagem_03.jpg"
                alt="Historia do Senai"
              />
            </Link>
          </Carousel.Item>         
          <Carousel.Item>
              <a href="https://conteudo.senaies.com.br/cursos-qualificacao" 
                  target="_blank" 
                  rel="noopener noreferrer">
              <img
              className="d-block "
              src="/carousel_imagem_01.png"
              alt="Acelera-Senai"
            />
            </a>
         </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    </Container>
  );
}

export default CarouselSenai;