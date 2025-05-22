import React from 'react'
// import styles from "./Estilos.module.css";
import { Container } from "react-bootstrap";
import CardCursoDetalhe from "../components/CardCursoDetalhe";
import styles from "./Estilos.module.css";

const DetalheCurso = () => {
  return (
    
    
    <div className={styles.divPagina}> 
    <Container>
     <CardCursoDetalhe/>
    </Container>
   </div>
  )
}

export default DetalheCurso