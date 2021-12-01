import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './assets/Black logo - no background.svg'
import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand>
          <Link NavLink to='/'>
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link>
              <StyledLink to='/'>Home</StyledLink>
            </Nav.Link>
            <Nav.Link>
              <StyledLink to='/products'>Products</StyledLink>
            </Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item>
                <StyledLink to='/about'>About</StyledLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <StyledLink to='/contact'>Contact</StyledLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <StyledLink to='/shipping'>Shipping</StyledLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <StyledLink to='/subscription'>Subscription</StyledLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <StyledLink to='/choosetaste'>Choose Taste</StyledLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i>
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown
                title={<i className='fas fa-user'></i>}
                id='username'
              >
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Dashboard' id='adminmenu'>
                <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/productlist'>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
export default Header
