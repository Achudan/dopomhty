import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  margin-top:0px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;
  width: 200px;
  li {
    padding: 18px 10px;
    align-self: flex-start;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Wasted</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  )
}

export default RightNav
