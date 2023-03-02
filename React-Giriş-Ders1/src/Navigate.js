import React, { Component } from "react";
import {
  NavbarText,
  DropdownItem,
  NavItem,
  NavLink,
  Nav,
  UncontrolledDropdown,
  Row,
  Col,
  NavbarBrand,
  Collapse,
  Navbar,
  DropdownToggle,
  NavbarToggler,
  DropdownMenu,
} from "reactstrap";
import SepetOzeti from "./SepetOzeti";
import { Link } from "react-router-dom";

class Navigate extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand>
            <Link to="/">Sepetim.com</Link>
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/form/">Form Demo</Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link to="/form2/">Form Demo2</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <SepetOzeti
                sepet={this.props.sepet}
                sepettenCikar={this.props.sepettenCikar}
              />
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigate;
