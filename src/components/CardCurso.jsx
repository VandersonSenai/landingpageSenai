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
          <Card.Text className="text-start">
            <b>Modalidade : </b>
            {props.modalidade}
          </Card.Text>
          <Card.Text className="text-start">
            <b>Cidade : </b> {props.cidade}
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