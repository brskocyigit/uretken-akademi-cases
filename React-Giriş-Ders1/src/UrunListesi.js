import React, { Component } from "react";
import {
  Table,
  Button
} from "reactstrap";

export default class UrunListesi extends Component {

  

  render() {
    return (
      <div>
        <h3>{this.props.baslik}</h3>
        <h4>{this.props.seciliKategori}</h4>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price($)</th>
              <th>Stock</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.ürünler.map(ürün=>(
              <tr key={ürün.id}>
                <th scope="row">{ürün.id}</th>
                <td>{ürün.productName}</td>
                <td>{ürün.unitPrice}</td>
                <td>{ürün.unitsInStock}</td>
                <td><Button
                onClick={()=>this.props.sepeteEkle(ürün)}
                color="success">
    Ekle
  </Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
