import React from 'react'
import styles from "./Estilos.module.css";
import { useListaCursos } from "../hooks/useApi";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import CardCurso from "../components/CardCurso";
import CarouselSenai from "../components/CarouselSenai";
import Footer from "../components/Footer";

const Home = () => {
  // const { usuarioNome } = useContext(AuthContext)

  const cursos = useListaCursos();

  return (
  <div className={styles.divPagina}>

      <section id="home" >
      <p className="text-center "></p>
        <CarouselSenai/>
      </section>
      <section id="cursos" className="justify-content-center gap-5 mt-1 mb-5 py-4">
        <h3 className="text-center" >Cursos Disponiveis</h3>
          <div className="d-flex justify-content-center gap-5 mt-4 mb-5 flex-wrap" >
          {cursos.map((cursos) => (
            <CardCurso
              key={cursos.id}
              id={cursos.id}
              nome={cursos.nome}
              cidade={cursos.cidade}
              modalidade={cursos.modalidade}
              imagemUrl_card={cursos.imagemUrl_card}
              valor={cursos.valor}
            />              
          ))}
          </div>
        </section>
        
  </div>
  )
}

export default Home