import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Dropdown, ButtonGroup, Badge } from "react-bootstrap"
import {FaShoppingCart} from "react-icons/fa"
import {BsPersonFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from './assets/Black logo - no background.svg';
import styled from 'styled-components'

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>

                <Navbar.Brand>
                <Link NavLink to="/"><Logo/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link><StyledLink to="/">Home</StyledLink></Nav.Link>
                        <Nav.Link><StyledLink to="/products">Products</StyledLink></Nav.Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item><StyledLink to="/about">About</StyledLink></NavDropdown.Item>
                            <NavDropdown.Item><StyledLink to="/contact">Contact</StyledLink></NavDropdown.Item>
                            <NavDropdown.Item><StyledLink to="/shipping">Shipping</StyledLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><StyledLink to="/subscription">Subscription</StyledLink></NavDropdown.Item>
                            <NavDropdown.Item><StyledLink to="/choosetaste">Choose Taste</StyledLink></NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                    <Dropdown  className="pr-1">
                        <Dropdown.Toggle split variant="btn btn-outline-dark" id="dropdown-split-basic">
                        <BsPersonFill/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle className="btn btn-outline-dark text-dark" split variant="" id="dropdown-split-basic">
                        <FaShoppingCart/>
                        <StyledBadge>{10}</StyledBadge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        </Dropdown.Menu>
                    </Dropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const StyledBadge = styled(Badge)`
    color:grey;
`;

export default Header
