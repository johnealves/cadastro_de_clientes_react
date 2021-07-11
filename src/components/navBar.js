import React from 'react';
import { Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <nav>
      {/* <Nav.Item>
        <Nav.Link >Voltar</Nav.Link>
      </Nav.Item> */}
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
    </nav>
  )
}

export default NavBar;
