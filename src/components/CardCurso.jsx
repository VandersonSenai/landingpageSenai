import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';


const CardCurso = (props) => {
  return (
    

          <Card bg="info" border="info" style={{ width: "22rem", padding:"0.1rem", marginBottom:"20px", marginTop:"20px", borderRadius:"10px" }} className="text-center">
        <Card.Img
          variant="top"
          src={
            props.imagemUrl_card != "null"
              ? props.imagemUrl_card
              : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          }
          height="200px"
        />
        <Card.Body className="d-flex flex-column justify-content-between"
        style={{backgroundColor: "var(--clr-base-dark)"}}
        >
        {/* <Card.Body style={{backgroundColor: "var(--clr-text)"}}> */}
          <Card.Title style={{ color: "var(--clr-text)" }}>{props.nome}</Card.Title>
          {/* <Card.Subtitle style={{ color: "var(--clr-text-secondary)" }} className="text-start pb-3">
            <b>Preço: </b>{props.valor}
          </Card.Subtitle> */}
          <Card.Text className="d-flex text-start align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z"/></svg>
            <b className="px-1">Modalidade : </b>
            {props.modalidade}
          </Card.Text>
          <Card.Text className="text-start">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m438-426 198-198-57-57-141 141-56-56-57 57 113 113Zm42 240q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
            <b className="px-1">Cidade : </b> 
            {props.cidade}
          </Card.Text>
          {/* <Card.Text style={{ color: "var(--clr-text-secondary)" }} className="text-start pb-1">
            <b>Preço: </b>{props.valor}
          </Card.Text> */}
          <Card.Link  as={NavLink} to={`/detalhecurso/${props.id}`}>
          {/* <Card.Link href={`/detalhecurso/${props.id}`}> */}
            <Button className="" 
                    size="sm"
                    variant="outline-info">
                      Saiba mais...
                      </Button>
          </Card.Link>
        </Card.Body>
      </Card>

    
  )
}

export default CardCurso