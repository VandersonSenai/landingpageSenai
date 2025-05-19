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
  // const linkImagem                = "/No_Image_Available.jpg";
      // "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
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
          Modalidade :
        </strong ><span className='px-2'>{curso.modalidade}</span>
      </p>
      <p className='py-1 m-0 p-3'>
        <strong className=''>
          Objetivo do Curso :
        </strong ><span className='px-2'>{curso.objetivo}</span>
      </p>
      <p className='py-1 m-0 p-3'>
        <strong className=''>
          Cidade :
        </strong ><span className='px-2'>{curso.cidade}</span>
      </p>
      <p className='py-1 m-0 p-3'>
        <strong className=''>
          Valor :
        </strong ><span className='px-2'>{curso.valor}</span>
      </p>
      <p className='py-1 m-0 p-3'>
        <strong className=''>
          Pré-requisito :
        </strong ><span className='px-2'>{curso.prerequisito}</span>
      </p>
      <br/>
      <div className='py-1 m-0 p-3'>
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