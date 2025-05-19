// Importa a url da api vindo do .env
const url = import.meta.env.VITE_API_URL;

import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../contexts/UserContext";

export function useVerificaLogin() {
const [usuarios, setUsuarios] = useState([]);
const { login } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
        try {
          const req = await fetch(`${url}/usuarios`);
          const users = await req.json();
          setUsuarios(users);
        } catch (erro) {
          console.log(erro.message);
        }
      }
    fetchData();
  }, []);

  const verificaLogin = (data) => {
  const userToFind = usuarios.find((user) => {
      return user.email === data.email;
    });

    if (userToFind != undefined && userToFind.senha == data.senha) {
      login(userToFind);
      // console.log("Usuário logado", userToFind.nome);
      console.log("Usuário logado", userToFind.userName);
      return "Login efetuado com sucesso";
    } else {
      return "Usuário ou senha inválidos";
    }
  };
  return { verificaLogin };
}

export function useListaCursos() {
  const [cursos, setCursos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
              const resposta = await fetch(`${url}/cursos`);
              const cursos = await resposta.json();
              setCursos(cursos);
            } catch (erro) {
              console.log(erro.message);
            }
      }
      fetchData();
    }, []);
  return cursos
}
export function useBuscarCursoId() {
  const BuscarCursoId = async (id) => {
    const req = await fetch(`${url}/cursos/${id}`);
    const res = await req.json();
    // console.log("Curso encontrado:", res);
    return res;
  };
  return { BuscarCursoId };
}

export function useSalvarContato() {
  const SalvarContato = async (data) => {
    const req = await fetch(`${url}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    console.log("Contato salvo:", res);
    return res;
  };
  return { SalvarContato };
}

export function useListarCursosNome() {
  const [ListarCursosNome, setListarCursosNome] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/cursos`);
        const cursos = await req.json();
        // Extrair apenas os campos id e nome
        const cursosNomes = cursos.map(({ id, nome }) => ({ id, nome }));
        setListarCursosNome(cursosNomes);
        console.log("Cursos Nomes : ", cursosNomes);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);
  return ListarCursosNome;
}
