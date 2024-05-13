// FORMATAÇÃO OK
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Menu() {
  // Renderiza o menu da aplicação
  return (
    // <Navbar expand='lg' className='bg-body-tertiary'>
    <Navbar expand='lg' className='m-2' bg='light'>
      <Container className='m-0'>
        {/* <Navbar.Brand><Link to='/'>Menu</Link></Navbar.Brand> */}
        <Navbar.Brand href='/'>HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/agencia'>AGÊNCIAS</Nav.Link>
            <Nav.Link href='/usuario'>USUÁRIOS</Nav.Link>
            <Nav.Link href='/produto'>PRODUTOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  // return (
  //     <Navbar expand='lg' className='bg-body-tertiary'>
  //         <Container fluid style={{padding: '0 50px'}}>
  //             <Navbar.Brand><Link to='/'>Menu</Link></Navbar.Brand>
  //             <Navbar.Toggle aria-controls='basic-navbar-nav'/>
  //             <Navbar.Collapse id='basic-navbar-nav'>
  //                 <Nav className='me-auto'>
  //                     <NavDropdown title='Cadastros' id='basic-nav-dropdown'>
  //                         <NavDropdown.Item><Link to='/agencia'>Agências</Link></NavDropdown.Item>
  //                         <NavDropdown.Divider />
  //                         <NavDropdown.Item><Link to='/usuario'>Usuários</Link></NavDropdown.Item>
  //                         <NavDropdown.Divider />
  //                         <NavDropdown.Item><Link to='/produto'>Produtos</Link></NavDropdown.Item>
  //                     </NavDropdown>
  //                 </Nav>
  //             </Navbar.Collapse>
  //         </Container>
  //     </Navbar>
  // );
}

//             <Navbar.Toggle aria-controls='basic-navbar-nav'/>
//             <Navbar.Collapse id='basic-navbar-nav'>
//                 <Nav className='me-auto'>
//                     <NavDropdown title='Cadastros' id='basic-nav-dropdown'>
//                         <NavDropdown.Item><Link to='/agencia'>Agências</Link></NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item><Link to='/usuario'>Usuários</Link></NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item><Link to='/produto'>Produtos</Link></NavDropdown.Item>
//                     </NavDropdown>
//                 </Nav>
//             </Navbar.Collapse>
//         </Container>
//     </Navbar> */}
