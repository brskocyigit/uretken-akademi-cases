import React, { Component } from "react";
import { Container, Row, Col, Table} from "reactstrap";
import Loading from "./Loading";
import axios from "axios";

export default class Users extends Component {
  state = { users: [], isLoaded: false };

  kullaniciGetir() {
    axios
      .request("https://jsonplaceholder.typicode.com/users")
      .then((response) => this.setState({ users: response.data }));

    this.setState({ isLoaded: true });
  }

  componentDidMount() {
    setTimeout(() => {
      this.kullaniciGetir();
    }, 3000);
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <Container className="d-flex justify-content-center min-vh-100">
            <Row className="d-flex justify-content-center align-items-center">
              <Col>
                <h1>Users Info</h1>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(user => (
                        <tr>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}
