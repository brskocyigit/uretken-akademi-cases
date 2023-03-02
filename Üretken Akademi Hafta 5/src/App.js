import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Celcius from "./Celcius";
import CurrentDegree from "./CurrentDegree";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";

class App extends Component {
  state = { currentDegree: 0, celcius:0, fahrenheit:32, kelvin: 273.15 };
  increaseDegree = (degree) => {
    this.state.currentDegree=degree+1
    this.setState({ celcius: this.state.currentDegree});
    this.setState({ fahrenheit: ((this.state.currentDegree) * 9) / 5 + 32 });
    this.setState({ kelvin: this.state.currentDegree+273.15});
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="12">
              <h1>Hava Nasıl</h1>
              <CurrentDegree currentDegree={this.state.currentDegree} />
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <ListGroup>
                <ListGroupItem
                  onClick={() => this.increaseDegree(this.state.currentDegree)}
                >
                  Sıcaklığı Arttır
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <Celcius celcius={this.state.celcius} />
            </Col>
            <Col xs="4">
              <Fahrenheit fahrenheit={this.state.fahrenheit} />
            </Col>
            <Col xs="4">
              <Kelvin kelvin={this.state.kelvin} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
