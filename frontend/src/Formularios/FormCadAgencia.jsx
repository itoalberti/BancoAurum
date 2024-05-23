import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';

export default function FormCadAgencia(props) {
  // Define o estado do formulário e da agência
  const [validado, setValidado] = useState(true);
  const [agencia, setAgencia] = useState(props.agencia);

  // Função para manipular qualquer mudança de valores nos campos do formulário
  function manipularMudanca(evento) {
    const componente = evento.currentTarget;
    setAgencia({ ...agencia, [componente.name]: componente.value });
  }

  // Função para enviar os dados do formulário para gravação/alteração caso estejam válidos
  function manipularSubmissao(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    const form = evento.currentTarget;
    if (!form.checkValidity()) setValidado(false);
    else {
      setValidado(true);
      if (!props.atualizando) props.gravarAgencia(agencia);
      else props.alterarAgencia(agencia);
    }
  }

  // Retorna o formulário de cadastro de agência e seus atributos para ser preenchido
  return (
    <Form noValidate validated={!validado} onSubmit={manipularSubmissao}>
      <Row className='mb-3'>
        {/* Código da Agência */}
        <Form.Group as={Col} md='1'>
          <Form.Label>Código</Form.Label>
          <Form.Control disabled type='number' placeholder='0' value={agencia.codigo} id='codigo' name='codigo' onChange={manipularMudanca} />
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        {/* Número da Agência */}
        <Form.Group as={Col} md='2'>
          <Form.Label>N° da Agência</Form.Label>
          <Form.Control required type='number' placeholder='Número' value={agencia.numero} id='numero' name='numero' onChange={manipularMudanca} />
          <Form.Control.Feedback type='invalid'>Por favor, informe o número!</Form.Control.Feedback>
        </Form.Group>
        {/* Telefone da Agência */}
        <Form.Group as={Col} md='3'>
          <Form.Label>Telefone</Form.Label>
          <Form.Control required type='text' placeholder='Telefone' value={agencia.telefone} id='telefone' name='telefone' onChange={manipularMudanca} />
          <Form.Control.Feedback type='invalid'>Por favor, informe o telefone!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        {/* CEP da Agência */}
        <Form.Group as={Col} md='1'>
          <Form.Label>CEP</Form.Label>
          <Form.Control required type='text' placeholder='CEP' value={agencia.cep} id='cep' name='cep' onChange={manipularMudanca} />
          <Form.Control.Feedback type='invalid'>Por favor, informe o CEP!</Form.Control.Feedback>
        </Form.Group>
        {/* Endereço da Agência */}
        <Form.Group as={Col} md='4'>
          <Form.Label>Endereço</Form.Label>
          <Form.Control required type='text' placeholder='Endereço' value={agencia.endereco} id='endereco' name='endereco' onChange={manipularMudanca} />
          <Form.Control.Feedback type='invalid'>Por favor, informe o endereço!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        {/* Cidade e UF da Agência */}
        <Form.Group as={Col} md='3'>
          <Form.Label>Cidade</Form.Label>
          <Form.Control required type='text' placeholder='Cidade' value={agencia.cidade} id='cidade' name='cidade' onChange={manipularMudanca} />
          <Form.Control.Feedback type='invalid'>Por favor, informe a cidade!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='1'>
          <Form.Label>UF</Form.Label>
          <Form.Control required type='text' placeholder='UF' value={agencia.uf} id='uf' name='uf' onChange={manipularMudanca} />
          <Form.Control.Feedback type='invalid'>Por favor, informe o estado!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        {/* E-mail da Agência */}
        <Form.Group as={Col} md='4'>
          <Form.Label>E-mail</Form.Label>
          <Form.Control required type='email' placeholder='E-mail' value={agencia.email} id='email' name='email' onChange={manipularMudanca} />
          <Form.Control.Feedback type='invalid'>Por favor, informe o e-mail!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* Botões para Gravar/Alterar e Voltar para a lista de agências */}
      <Button style={{ marginRight: '5px' }} type='submit'>
        {props.atualizando ? 'Atualizar' : 'Gravar'}
      </Button>
      <Button
        onClick={() => {
          if (props.atualizando) props.setAtualizando(false);
          props.setExibirTabela(true);
          props.setAgenciaAtual(props.agenciaVazia);
        }}
      >
        Voltar
      </Button>
    </Form>
  );
}
// ....................................BACKUP...............................................

// import { Button, Col, Form, Row } from 'react-bootstrap';
// import { useState } from 'react';
// import ReactInputMask from 'react-input-mask';

// export default function FormCadAgencia(props) {
//   // Define o estado do formulário e da agência
//   const [validado, setValidado] = useState(true);
//   const [agencia, setAgencia] = useState(props.agencia);

//   // Função para manipular qualquer mudança de valores nos campos do formulário
//   function manipularMudanca(evento) {
//     const componente = evento.currentTarget;
//     setAgencia({ ...agencia, [componente.name]: componente.value });
//   }

//   // Função para enviar os dados do formulário para gravação/alteração caso estejam válidos
//   function manipularSubmissao(evento) {
//     evento.preventDefault();
//     evento.stopPropagation();
//     const form = evento.currentTarget;
//     if (!form.checkValidity()) setValidado(false);
//     else {
//       setValidado(true);
//       if (!props.atualizando) props.gravarAgencia(agencia);
//       else props.alterarAgencia(agencia);
//     }
//   }

//   // Retorna o formulário de cadastro de agência e seus atributos para ser preenchido
//   return (
//     <Form noValidate validated={!validado} onSubmit={manipularSubmissao} style={{ padding: '20px' }}>
//       <Row className='mb-3'>
//         {/* CÓDIGO DA AGÊNCIA */}
//         <Col xs='auto'>
//           <Form.Group style={{ width: '60px' }}>
//             <Form.Label>Código</Form.Label>
//             <Form.Control disabled type='number' placeholder='0' value={agencia.codigo} id='codigo' name='codigo' onChange={manipularMudanca} />
//           </Form.Group>
//         </Col>
//       </Row>

//       <Row className='mb-3'>
//         {/* Número da Agência */}
//         <Col xs='auto'>
//           <Form.Group style={{ width: '105px' }}>
//             <Form.Label>N° da Agência</Form.Label>
//             <Form.Control required type='number' placeholder='Número' value={agencia.numero} id='numero' name='numero' onChange={manipularMudanca} />
//             <Form.Control.Feedback type='invalid'>Por favor, informe o número!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         {/* Telefone da Agência */}
//         <Col xs='auto'>
//           <Form.Group style={{ width: '140px' }}>
//             <Form.Label>Telefone</Form.Label>
//             <ReactInputMask mask='(99) 9999-9999' placeholder='(__) ____-____' value={agencia.telefone} onChange={manipularMudanca}>
//               {(inputProps) => <Form.Control {...inputProps} required type='text' name='telefone' id='telefone' />}
//             </ReactInputMask>
//             {/* <Form.Control
//                         required
//                         type='text'
//                         placeholder='Telefone'
//                         value={agencia.telefone}
//                         id='telefone'
//                         name='telefone'
//                         onChange={manipularMudanca}/> */}
//             <Form.Control.Feedback type='invalid'>Por favor, informe o telefone!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//       </Row>

//       <Row className='mb-3'>
//         {/* CEP da Agência */}
//         <Col xs='auto'>
//           <Form.Group style={{ width: '105px' }}>
//             <Form.Label>CEP</Form.Label>
//             <ReactInputMask mask='99999-999' placeholder='_____-___' value={agencia.cep} onChange={manipularMudanca}>
//               {(inputProps) => <Form.Control {...inputProps} required type='text' name='cep' id='cep' />}
//             </ReactInputMask>
//             {/* <Form.Control required type='text' placeholder='CEP' value={agencia.cep} id='cep' name='cep' onChange={manipularMudanca} /> */}
//             <Form.Control.Feedback type='invalid'>Por favor, informe o CEP!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         <Col xs='auto'>
//           {/* Endereço da Agência */}
//           <Form.Group style={{ width: '300px' }}>
//             <Form.Label>Endereço</Form.Label>
//             <Form.Control required type='text' placeholder='Endereço' value={agencia.endereco} id='endereco' name='endereco' onChange={manipularMudanca} />
//             <Form.Control.Feedback type='invalid'>Por favor, informe o endereço!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//       </Row>
//       <Row className='mb-3'>
//         {/* Cidade da Agência */}
//         <Col xs='auto'>
//           <Form.Group style={{ width: '250px' }}>
//             <Form.Label>Cidade</Form.Label>
//             <Form.Control required type='text' placeholder='Cidade' value={agencia.cidade} id='cidade' name='cidade' onChange={manipularMudanca} />
//             <Form.Control.Feedback type='invalid'>Por favor, informe a cidade!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         {/* UF da Agência */}
//         <Col xs='auto'>
//           <Form.Group>
//             <Form.Label>UF</Form.Label>
//             <Form.Select required id='uf' name='uf' value={agencia.uf} onChange={manipularMudanca}>
//               <option></option>
//               <option value='AC'>AC</option>
//               <option value='AL'>AL</option>
//               <option value='AP'>AP</option>
//               <option value='AM'>AM</option>
//               <option value='BA'>BA</option>
//               <option value='CE'>CE</option>
//               <option value='ES'>ES</option>
//               <option value='GO'>GO</option>
//               <option value='MA'>MA</option>
//               <option value='MT'>MT</option>
//               <option value='MS'>MS</option>
//               <option value='MG'>MG</option>
//               <option value='PA'>PA</option>
//               <option value='PB'>PB</option>
//               <option value='PR'>PR</option>
//               <option value='PE'>PE</option>
//               <option value='PI'>PI</option>
//               <option value='RJ'>RJ</option>
//               <option value='RN'>RN</option>
//               <option value='RS'>RS</option>
//               <option value='RO'>RO</option>
//               <option value='RR'>RR</option>
//               <option value='SC'>SC</option>
//               <option value='SP'>SP</option>
//               <option value='SE'>SE</option>
//               <option value='TO'>TO</option>
//               <option value='DF'>DF</option>
//             </Form.Select>
//             {/* <Form.Control required type='text' placeholder='UF' value={agencia.uf} id='uf' name='uf' onChange={manipularMudanca} /> */}
//             <Form.Control.Feedback type='invalid'>Por favor, informe a UF!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//       </Row>
//       <Row className='mb-3'>
//         <Col xs='auto'>
//           {/* E-mail da Agência */}
//           <Form.Group style={{ width: '300px' }}>
//             <Form.Label>E-mail</Form.Label>
//             <Form.Control required type='email' placeholder='E-mail' value={agencia.email} id='email' name='email' onChange={manipularMudanca} />
//             <Form.Control.Feedback type='invalid'>Por favor, informe o e-mail!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//       </Row>
//       {/* Botões para Gravar/Alterar e Voltar para a lista de agências */}
//       <Button style={{ marginRight: '5px' }} type='submit'>
//         {props.atualizando ? 'Atualizar' : 'Gravar'}
//       </Button>
//       <Button
//         onClick={() => {
//           if (props.atualizando) props.setAtualizando(false);
//           props.setExibirTabela(true);
//           props.setAgenciaAtual(props.agenciaVazia);
//         }}
//       >
//         Voltar
//       </Button>
//     </Form>
//   );
// }
