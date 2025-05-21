import React from 'react'
import styles from "./Estilos.module.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import Container from 'react-bootstrap/Container';


const Sobre = () => {
  return (
    <div className={styles.divPagina}>
      <Container>
        <Row>
          <Col xs={12} className='{styles.titulo} py-3 col-md-6 order-md-1'>
          <h2>
            A Melhor Escola de Ensino
            <i><strong><h2>Técnico</h2></strong></i> da América Latina  
          </h2>
          </Col>
          <Col xs={12} className='{styles.titulo} py-0 d-flex align-items-center text-start col-md-6 order-md-2'>
            <p>
              o Senai ES segue sua missão de qualificar profissionais para a indústria, oferecendo cursos, consultorias e serviços que atendem às demandas de um mercado em constante evolução.
            </p>
          </Col>
          </Row>

          <Row className='{styles.titulo} py-3 d-flex align-items-center text-start col-sm-12 order-sm-3'>
          
          
            <h3 className='py-3'>
              História no Espírito Santo
            </h3>
            <p>
            O Senai surgiu no Espírito Santo em 25 de março de 1952. A primeira escola funcionou em um galpão cedido pela CVRD (hoje Vale). A primeira escola, chamada Pedro Nolasco, oferecia cursos de marcenaria e mecânica, em Cariacica. Nos anos seguintes, o Senai se expandiu para atender às necessidades da indústria ferroviária, incorporando a Escola Ferroviária João Neiva.
            </p>
            <p>
            Em 1964, foi inaugurado o Centro Jerônimo Monteiro em Vitória, com equipamentos modernos e alta concorrência pelas vagas. A expansão continuou nas décadas de 1970 e 1980, com novos centros de formação em Cachoeiro de Itapemirim, Linhares, Serra, Colatina e Vila Velha.
            </p>
            <p>
            Com o tempo, o Senai se tornou uma referência em educação profissional, firmando parcerias estratégicas com grandes empresas e expandindo seu alcance para novos setores, como Automação, Construção Civil, Tecnologia da Informação, entre outros. Para garantir o acesso em todo o estado, também investiu em unidades móveis equipadas para atender diferentes áreas da indústria.
            </p>
            <p>
            A inovação nunca parou! Nos últimos anos, o Senai lançou iniciativas como o Findeslab, um hub de inovação, o novo Instituto Senai de Tecnologia, e a Academia de Segurança Cibernética. E para facilitar ainda mais o acesso à educação, os cursos técnicos ganharam um formato híbrido, com 80% online e 20% presencial.
            </p>
            <p>
            Hoje, o Senai ES segue sua missão de qualificar profissionais para a indústria, oferecendo cursos, consultorias e serviços que atendem às demandas de um mercado em constante evolução.
            </p>
            
          
        </Row>
      <h2 className='{styles.titulo} py-5'>
        
        </h2>

      </Container>
      
      </div>
  )
}

export default Sobre