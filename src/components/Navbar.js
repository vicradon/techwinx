import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'gatsby';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <style>
        {`
          .techwinx-navbar {
            position:fixed;
            width:100%;
            z-index:1;
          }
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
          .no-border {
            border:none;
            outline:none !important;
          }
          .nav-link {
            padding:0 0.2rem !important;
          }
          @media(min-width:760px){
            .techwinx-navbar {
              padding-top:1rem !important;
              padding-bottom:1rem !important;
            }
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
              background-color:white;
            }
            .nav-link {
              padding:0.2rem !important;
            }
            .drop-menu {
              margin-bottom:1rem;
            }
          }
        `}
      </style>
      <Navbar className="px-20 lb techwinx-navbar" color="light" light expand="md">

        <Link to="/">Techwinx</Link>


        <NavbarToggler className="no-border" onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto nav white-bg" navbar>
            <NavItem>
              <Link className="nav-link" to="/ai">
                AI
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/mr">
                MR
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/uavs">
                UAVs
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/tefrica">
                Tefrica
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu className="drop-menu">
                <DropdownItem>
                  <Link className="nav-link" to="/howto">
                    How-to
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/report-issue">
                    Report an issue
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu className="drop-menu">
                <DropdownItem>
                  <Link className="nav-link" to="/services/web-dev">
                    Web development
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="nav-link" to="/services/graphics-design">
                    Graphics design
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="nav-link" to="/services/gadgets">
                    Gadgets
                  </Link>
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