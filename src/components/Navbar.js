import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <style>
        {`
          .nav-items-justified-right {
            display:flex;
            justify-content:right;
          }
          .px-20 {
            padding: 8px 10rem;
          }
          .lb {
            background-color:lightblue !important; 
          }
          nav * {
            font-size:1.2rem;
            padding:0 0.5rem;
            color:black !important;
          }
          nav *:hover {
            color:grey;
          }
          .noborder {
            border:none;
            outline:none !important;
          }
          @media(max-width:1000px){
            .px-20 {
              padding: 8px 7rem;
            }
          }
          @media(max-width:750px){
            .px-20 {
              padding: 8px 2rem;
            }
            .white-bg {
              background-color:whitesmoke;
            }
          }
        `}
      </style>
      <Navbar className = "px-20 lb" color="light" light expand="md">
        <NavbarBrand href="/">Techwinx</NavbarBrand>
        <NavbarToggler className = "noborder" onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto nav white-bg" navbar>
              <NavItem>
                <NavLink href="/components/">AI</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">MR</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">UAVs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Tefrica</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
              </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Young Techie
                </DropdownItem>
                  <DropdownItem>
                    Tech for social good
                </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Report an issue
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
        </Collapse>

      </Navbar>
    </div>
  );
}

export default Example;