import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class FormDemo2 extends Component {
    state={email:"",password:"",city:"",description:""}
    handleChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]:value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        alertify.success(this.state.email + " veritabanına eklendi");
        alertify.success(this.state.password + " veritabanına eklendi");
        alertify.success(this.state.city + " veritabanına eklendi");
        alertify.success(this.state.description + " veritabanına eklendi");
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                ></Input>
            </FormGroup>
            <FormGroup>
                <Label for="password">Passwor</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                ></Input>
            </FormGroup>
            <FormGroup>
                <Label for="city">City</Label>
                <Input
                    type="select"
                    name="city"
                    id="city"
                    placeholder="City"
                    onChange={this.handleChange}
                >
                    <option>Istanbul</option>
                    <option>Ankara</option>
                    <option>İzmir</option>
                    <option>Tekirdağ</option>
                    <option>Erzurum</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input
                    type="textarea"
                    name="description"
                    id="description"
                    placeholder="Description"
                    onChange={this.handleChange}
                ></Input>
            </FormGroup>
            <Button type="submit" >Submit</Button>
        </Form>
      </div>
    )
  }
}
