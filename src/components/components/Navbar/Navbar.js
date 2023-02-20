import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SideBar from "./Side";
import logo from "./logo.png";
const NavBar = () => {
  // const handleClick = () => {
  //   setinput("w")
  // };
  // useEffect(() => {
  //   getPrompt();
  // }, [input]);
  // console.log(prompt)
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" style={{marginBottom:'0'}} inverse className="fixed-top collapseOnSelect nav-bar">
      <Container fluid>
        <Navbar.Brand href="#">
        <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" me-auto my-2 my-lg-0"
            style={{ height: '40px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Ask</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <SideBar />
      {/* {image.map((element)=>{
      return <Form text={element.text} image={element.image}/>
    }) }
    <button onClick={handleClick}>Click Me</button> */}
    </div>
    
  );

};

export default NavBar;
