import React, { Component } from 'react';
import { Navbar, NavItem, NavLink, Nav, NavbarBrand } from 'shards-react';
import "./header.css";
import styled from "styled-components";
import theme from "../../theme";
import classnames from 'classnames';
import { Button } from 'reactstrap';

const Head = styled(Navbar)`
  background-color: ${ theme.primaryDark } !important;
  box-shadow: ${ props => props.shadow ? "0px 9px 22px 2px rgba(0,0,0,0.81)" : "none"};
  z-index: 3;
  position: fixed;
  width: 100%;
  padding: 1.2em;
  top: 0;
  display: block;
  transition: top 0.6s, box-shadow 0.4s;
`

const HeadLink = styled(NavLink)`
  color: ${theme.highlight} !important;
  font-family: ${theme.paraFont} !important;
  cursor: pointer !important;
  &:hover {
    color: ${theme.white} !important;
  }
`
const HeadResume = styled(HeadLink)`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${theme.highlight} !important;
  background: none !important;
  &:hover {
    border-color: ${theme.white} !important;
  }
`

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      displayShadow: false
    };
  }

  handleScroll = () => {
    const {prevScrollpos} = this.state;
    const currentScrollpos = window.pageYOffset;
    const visibility = prevScrollpos > currentScrollpos;
    let displayS = false;
    if(currentScrollpos !== 0) {
      displayS = true;
    }
    this.setState({
      prevScrollpos: currentScrollpos,
      visible: visibility,
      displayShadow: displayS
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return(
      <Head shadow = {this.state.displayShadow} className = {classnames({ 'header' : true}, { 'header-hidden' : !this.state.visible})} type="custom" theme="primary" expand="sm">
        <div className = "row">
          <Nav navbar className = "d-none d-md-flex ml-auto mr-2">
            <NavItem className = "header-link">
              <HeadLink>About</HeadLink>
            </NavItem>
            <NavItem className = "header-link">
              <HeadLink>Blog</HeadLink>
            </NavItem>
            <NavItem className = "header-link">
              <HeadLink>Projects</HeadLink>
            </NavItem>
            <NavItem className = "header-link">
              <HeadLink>Contact</HeadLink>
            </NavItem>
            <NavItem className = "header-link">
              <HeadResume as = {Button}>Resume</HeadResume>
            </NavItem>
          </Nav>
        </div>
      </Head>    );
  }
}

export default Header;