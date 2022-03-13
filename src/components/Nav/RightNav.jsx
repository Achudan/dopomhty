import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

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
    text-color: white;
    
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

    a{
      color: white
    }
  }
`;

const RightNav = ({ open, currentUser }) => {
  return (
    <Ul open={open}>
      {
                currentUser?
                (<li><Link className="option" to="/decesedregistry">Deceased Registry</Link></li>):
                (<></>)
            }
      {/* <li><Link className="option" to="/decesedregistry">Deceased Registry</Link></li> */}
      <li><Link className="option" to="/safelist">Find your pal</Link></li>
      {/* <li><Link className="option" to="/signin">Sign In/Up</Link></li> */}
      {
                currentUser?
                (<li className="option" onClick={()=>auth.signOut()}>Logout</li>):
                (<li><Link className="option" to="/signin">Sign In/Up</Link></li>)
            }
            {console.log('user',currentUser)}
    </Ul>
  )
}

export default RightNav
