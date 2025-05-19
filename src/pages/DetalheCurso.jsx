import React from 'react'
// import styles from "./Estilos.module.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardCursoDetalhe from "../components/CardCursoDetalhe";
import styles from "./Estilos.module.css";



const DetalheCurso = () => {
  return (
    
    
    <div className={styles.divPagina}> 
     <CardCursoDetalhe/>
   </div>
  )
}

export default DetalheCurso