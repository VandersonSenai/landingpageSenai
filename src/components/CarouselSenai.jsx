import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function CarouselSenai() {
  return (

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
              <a href="https://conteudo.senaies.com.br/cursos-qualificacao" 
                  target="_blank" 
                  rel="noopener noreferrer">
              <img
              className="d-block w-100"
              src="/banner-Acelera-Senai_desktop.png"
              alt="Acelera-Senai"
            />
            </a>

          </Carousel.Item>
          <Carousel.Item>
            <a href="https://loja.senaies.com.br/" target="_blank" rel="noopener noreferrer">
            <img
              className="d-block w-100"
              src="/cursossenai.png"
              alt="Curos Senai"
            />
            </a>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default CarouselSenai;