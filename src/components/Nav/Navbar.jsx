import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  font-family: fantasy;
  font-size: 30px;
  .logo {
    padding: 15px 0;
    text-decoration : none
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Link className='logo' to="/" >
          DOPOMOHTY
      </Link>
      {/* <div className="logo">
        DOPOMOHTY
      </div> */}
      <Burger />
    </Nav>
  )
}

export default Navbar
