import React, { useState } from 'react';
import { Nav, NavLink, Collapse, NavItem, NavbarToggler } from 'reactstrap';
import styled from 'styled-components';

const NavHover = styled.div`
  font-weight: 500;
  font-size: 1.1rem;

  ${this}:hover {
    background-color: rgb(137, 84, 35);
    border-radius: 5px;
    color: white;
  }
`;

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Nav horizontal='center' className='py-1 shadow-sm bg-white'>
      <NavLink className='text-dark mr-5 d-none d-sm-block' href='#'>
        <NavHover className='p-2'>Welcome</NavHover>
      </NavLink>
      <NavLink className='text-dark mr-5 d-none d-sm-block' href='#'>
        <NavHover onClick={() => {
          props.scrollTo('portfolio')
        }} className='p-2'>
          My Design
        </NavHover>
      </NavLink>
      <NavLink className='text-dark mr-5 d-none d-sm-block' href='#'>
        <NavHover onClick={() => {
          props.scrollTo('education')
        }} className='p-2'>Education</NavHover>
      </NavLink>
      <NavLink className='text-dark mr-5 d-none d-sm-block' href='#'>
        <NavHover className='p-2'>Experience</NavHover>
      </NavLink>
      <NavbarToggler
        color='dark '
        className='ml-auto d-md-none'
        onClick={toggle}
      >
        <i className='fa fa-bars'></i>
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto px-3' navbar>
          <NavItem>
            <NavLink className='text-dark' href='/components/'>
              Welcome
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-dark' href='/components/'>
              My Design
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-dark' href='/components/'>
              Education
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-dark' href='/components/'>
              Experience
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Nav>
  );
};

export default Navbar;
