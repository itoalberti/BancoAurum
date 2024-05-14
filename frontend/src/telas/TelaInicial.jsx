import { Col, Image } from 'react-bootstrap';
import Pagina from '../Templates/Pagina';
import bankicon from '../Icones/bankicon.png';

export default function TelaInicial(props) {
  // Renderiza o componente Pagina da tela inicial da aplicação
  return (
    <>
      <Pagina />
      <Col style={{ padding: '20px' }}>
        <Image className='rounded mx-auto d-block' src={bankicon} width={300} />
      </Col>
    </>
  );
}
