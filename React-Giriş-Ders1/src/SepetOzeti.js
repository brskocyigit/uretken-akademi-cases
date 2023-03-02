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
  Badge,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class SepetOzeti extends Component {
  bosSepet() {
    return (
      <NavItem>
        <NavLink href="#">Sepet Boş</NavLink>
      </NavItem>
    );
  }

  sepetOzet() {
    return (
      <div>
        {" "}
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle caret nav>
            Sepetiniz
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.sepet.map((sepetUyesi) => (
              <DropdownItem key={sepetUyesi.id}>
                {sepetUyesi.urun.productName}
                <Badge color="success">
                  {""}
                  {sepetUyesi.quantity}
                </Badge>
                <Badge       
                  onClick={() => this.props.sepettenCikar(sepetUyesi.urun)}
                  color="danger"
                >
                  X
                </Badge >
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem>
              <Link to="sepet">Sepete Git</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }

  render() {
    return (
      <>{this.props.sepet.length > 0 ? this.sepetOzet() : this.bosSepet()}</>
    );
  }
}
