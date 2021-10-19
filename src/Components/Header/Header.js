import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
  const{user,logOut} =useAuth()
  return (
    <>
      <Navbar bg='primary' variant='dark' sticky='top' collapseOnSelect expand='md'>
        <Container>
          <Navbar.Brand  as={Link} to='/home'>
            Dental-Care
          </Navbar.Brand>
           <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/home'>Home </Nav.Link>
            <Nav.Link  as={Link} to="/about">About </Nav.Link>
            <Nav.Link  as={Link} to="/contact">Contact</Nav.Link>
            <div className="d-flex align-items-center m-0 justify-content-center">
                    <div className="d-flex align-items-center ">
                   <img className="rounded-circle w-25 mx-auto" src={user?.photoURL} alt="" />
                    <p className=" px-2">{user?.displayName}</p>
                  </div>
              <div>
                  {
                    user?.email?<button className="btn btn-warning" variant="light" onClick={logOut}>LogOut</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  }
              </div>
                </div>
            
          </Nav>
           </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
<h1>Header</h1>;
