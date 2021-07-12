import React from 'react';
import { Nav } from 'react-bootstrap';
import { IoHome } from 'react-icons/io5';

function NavBar() {
  return (
    <nav>
      <Nav.Item>
        <Nav.Link href="/" className="link-home">
          <IoHome />&nbsp;Home
        </Nav.Link>
      </Nav.Item>
      <hr/>
    </nav>
  )
}

export default NavBar;
