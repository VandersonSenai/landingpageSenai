import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useBuscarCursoId } from "../hooks/useApi";


const CardCursoDetalhe = ()  => {
  const { BuscarCursoId }         = useBuscarCursoId()
  const { id }                    = useParams();
  const navigate                  = useNavigate();
  const [curso, setCurso]         = useState({});
  const [cursoCarregado, setCursoCarregado] = useState(false);

  const voltarPaginaAnterior = () => {
    navigate(-1); 
  };

  useEffect(() => {
      async function fetchCurso() {
        try {
            const curso = await BuscarCursoId(id)
            setCurso(curso);
            setCursoCarregado(true);
            console.log("Curso encontrado:", cursoCarregado);
        } catch (erro) {
          alert("Erro ao buscar produto:", erro.message);
          if(erro.message.includes("Unexpected")){
            alert("Curso não encontrado")
            navigate("/home")
          }
        }
      }

      fetchCurso()
    }, []);
  

  // const [curso, setCurso] = useState({});

  return (
    <div className='d-flex flex-column text-start justify-content-center'>
      <h5 className='py-2 m-3'>{curso.nome}</h5>
      <Image className='mb-1 pb-2 rounded-4-4' src={curso.imagemUrl_detalhe} fluid rounded />
      <p className='py-2 m-0 p-3'>
        <strong className=''>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z"/></svg>
          <b className="px-2">
            
          Modalidade :
          </b>
            
        </strong ><span className='px-2'>{curso.modalidade}</span>
      </p>
      <p className='py-1 m-0 p-3'>
        <strong className=''>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-80q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"/></svg>
          <b className="px-2">
          Objetivo do Curso :
          </b>
        </strong ><span className='px-2'>{curso.objetivo}</span>
      </p>
      <p className='py-1 m-0 p-3'>
        <strong className=''>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m438-426 198-198-57-57-141 141-56-56-57 57 113 113Zm42 240q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
          <b className="px-2">
          Cidade :
          </b>
        </strong ><span className='px-2'>{curso.cidade}</span>
      </p>
      <p className='py-1 m-0 p-3'>
        <strong className=''>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z"/></svg>
          <b className="px-2">
          Valor :
          </b>
        </strong ><span className='px-2'>{curso.valor}</span>
      </p>
      <p className='py-1 m-0 p-3'>
        <strong className=''>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M222-200 80-342l56-56 85 85 170-170 56 57-225 226Zm0-320L80-662l56-56 85 85 170-170 56 57-225 226Zm298 240v-80h360v80H520Zm0-320v-80h360v80H520Z"/></svg>
          <b className="px-2">
            Pré-requisito :
          </b>
        </strong ><span className='px-2'>{curso.prerequisito}</span>
      </p>
      <br/>
      <div className='py-2 mb-3 p-3'>
        <Button className=" " 
                variant="outline-info" 
                size="sm"
                onClick={voltarPaginaAnterior}>
                   Voltar 
        </Button>
      </div>
                      
    </div>
  )
}

export default CardCursoDetalhe