import { Button, Table } from 'react-bootstrap';
import { useState } from 'react';

export default function TabelaUsuario(props) 
{
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <div>
            {/* Cria tabela com a lista de usuários com os botões para alterar e excluir um usuário */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Tipo</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Gênero</th>
                        <th>Telefone</th>
                        <th>Data de Nascimento</th>
                        <th>CEP</th>
                        <th>Endereço</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>E-mail</th>
                        <th>Senha</th>
                        <th>N° da Agência</th>
                        <th>Cidade da Agência</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listaUsuarios?.map((usuario) => {
                        return (
                            <tr key={usuario.codigo}>
                                <td>{usuario.codigo}</td>
                                <td>{usuario.tipo}</td>
                                <td>{usuario.nome}</td>
                                <td>{usuario.cpf}</td>
                                <td>{usuario.rg}</td>
                                <td>{usuario.genero}</td>
                                <td>{usuario.telefone}</td>
                                <td>{usuario.data_nascimento.split('-').reverse().join('/')}</td>
                                <td>{usuario.cep}</td>
                                <td>{usuario.endereco}</td>
                                <td>{usuario.cidade}</td>
                                <td>{usuario.uf}</td>
                                <td>{usuario.email}</td>
                                <td>
                                    {mostrarSenha ? usuario.senha : '•'.repeat(usuario.senha.length)}
                                    <button onClick={() => setMostrarSenha(!mostrarSenha)}>
                                        {mostrarSenha ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                            </svg>
                                            : 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                            </svg>
                                        }
                                    </button>
                                </td>
                                <td>{usuario.agencia.numero}</td>
                                <td>{usuario.agencia.cidade}</td>
                                <td>
                                    <Button variant='primary' style={{marginRight:'5px'}} onClick={() => {props.alterarUsuario(usuario)}}>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'>
                                            <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/>
                                            <path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z'/>
                                        </svg>
                                    </Button>
                                    <Button variant='danger' onClick={() => {
                                        if (window.confirm('Deseja realmente excluir o usuário ' + usuario.nome + '?'))
                                            props.excluirUsuario(usuario)
                                        }}>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash-fill' viewBox='0 0 16 16'>
                                            <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0'/>
                                        </svg>
                                    </Button>
                                </td>	
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}