// +++++++++++++++++++++++++++ BACKUP +++++++++++++++++++++++++++
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const urlProduto = 'http://localhost:4000/produto';
// const urlUsuario = 'http://localhost:4000/usuario';

// export default function TabelaProdutosPorUsuario(props) {
//   const [validado, setValidado] = useState(false);
//   const [usuario, setUsuario] = useState({
//     usu_codigo: 0,
//     usu_tipo: '',
//     usu_nome: '',
//     usu_cpf: '',
//     usu_rg: '',
//     usu_genero: '',
//     usu_telefone: '',
//     usu_data_nascimento: '',
//     usu_cep: '',
//     usu_endereco: '',
//     usu_cidade: '',
//     usu_uf: '',
//     usu_email: '',
//     usu_senha: '',
//   });

//   const [listaUsuarios, setListaUsuarios] = useState([]);
//   useEffect(() => {
//     fetch(urlUsuario)
//       .then((resp) => resp.json())
//       .then((data) => {
//         setListaUsuarios(data);
//       })
//       .catch((erro) => console.error('Erro ao buscar usuários', erro));
//   }, []);

//   let navigate = useNavigate();

//   function manipularMudanca(e) {
//     const elemForm = e.currentTarget;
//     const id = elemForm.id;
//     const valor = elemForm.value;

//     if (id === 'cod_ag' || id === 'endereco_ag' || id === 'cidade_ag' || id === 'uf_ag') {
//       setUsuario((prevCliente) => ({
//         ...prevUsuario,
//         agencia: {
//           ...prevUsuario.agencia,
//           [id]: valor,
//         },
//       }));
//     } else {
//       setUsuario((prevUsuario) => ({
//         ...prevUsuario,
//         [id]: valor,
//       }));
//     }
//   }
// }
