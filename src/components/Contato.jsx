import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/UserContext";



import {
  useSalvarContato,
  useBuscarCursoId,
} from "../hooks/useApi";

const Contato = (props) => {
  const { SalvarContato } = useSalvarContato()
  const { BuscarCursoId } = useBuscarCursoId()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    // watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    SalvarContato(data);
    alert("Contato salvo com sucesso");
    navigate("/home");
  }

  const onError = (errors) => {
    console.log(errors);
  };
  return (
    
    <Container fluid className="d-flex flex-column justify-content-center align-items-center p-0 m-2"
      // style={{ height: "68vh" }}
      >
        <div  className="">
          <h4 >Entre com suas informações</h4>
          <Form 
            style={{ width: "20rem", textAlign: "center" }}
            onSubmit={handleSubmit(onSubmit, onError)}
          >
          <FloatingLabel
              controlId="floatingInputNome"
              label="Nome"
              className="mb-3"
            >
          <Form.Control
            type="text"
            placeholder="Digite o nome do produto"
            {...register("userName", {
              required: "O nome é obrigatório",
              minLength: {
                value: 1,
                message: "O nome deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O nome deve ter ate 20 caracteres",
              },
            })}
          />
          {errors.nome && <p className="error">{errors.nome.message}</p>}
          </FloatingLabel>
                            {/* email */}
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Email"
                              className="mb-3"
                            >
                              <Form.Control
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                  required: "O email é obrigatório",
                                  pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                    message: "Email inválido",
                                  },
                                  validate: (value) => value.includes("@") || "Email inválido",
                                })}
                              ></Form.Control>
                              {errors.email && <p className="error">{errors.email.message}</p>}
                            </FloatingLabel>
                            {/* senha */}
                            <FloatingLabel
                              controlId="floatingInputPassword"
                              label="Senha"
                              className="mb-4"
                            >
                              <Form.Control
                                type="password"
                                placeholder="Senha"
                                {...register("senha", {
                                  required: "A senha é obrigatória",
                                })}
                              ></Form.Control>
                              {errors.senha && <p className="error">{errors.senha.message}</p>}
                            </FloatingLabel>
                            
                              <Button className="mb-2" type="submit"
                                size="lg"
                                variant="outline-success">
                                  {props.page === "contatosite" ? "salvacontato" : "Salvar"}
                              </Button>
                          </Form>
                        
                      </div>
    </Container>
    )
  }


export default Contato