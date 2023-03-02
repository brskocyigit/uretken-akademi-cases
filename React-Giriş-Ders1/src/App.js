import React, { Component } from "react";
import Navigate from "./Navigate";
import Category from "./Category";
import UrunListesi from "./UrunListesi";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import SepetListesi from "./SepetListesi";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import FormDemo from "./FormDemo";
import FormDemo2 from "./FormDemo2";

class App extends Component {
  state = { seciliKategori: "", ürünler: [], sepet: [] };
  kategoriDegistir = (kategori) => {
    this.setState({ seciliKategori: kategori.categoryName });
  };

  ürünGetir() {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ ürünler: data }));
  }

  componentDidMount() {
    this.ürünGetir();
  }

  sepeteEkle = (urun) => {
    let yeniUrun = this.state.sepet;
    var urunEklendi = yeniUrun.find((s) => s.urun.id === urun.id);
    if (urunEklendi) {
      urunEklendi.quantity += 1;
    } else {
      yeniUrun.push({ urun: urun, quantity: 1 });
    }
    this.setState({ sepet: yeniUrun });
    alertify.success(urun.productName + " sepete eklendi");
  };

  sepettenCikar = (urun) => {
    var cikarilanUrun = this.state.sepet.find((s) => s.urun.id === urun.id);
    if (cikarilanUrun.quantity > 1) {
      cikarilanUrun.quantity -= 1;
      this.setState({ sepet: this.state.sepet });
      alertify.warning(urun.productName + " ürününden bir tane çıkarıldı");
    } else {
      var kalanUrunler = this.state.sepet.filter((u) => u.urun.id !== urun.id);
      this.setState({ sepet: kalanUrunler });
      alertify.error(urun.productName + " sepetten çıkarıldı");
    }
  };

  render() {
    let bilgiKategori = { baslik: "Kategori", ilaveBilgi: "İlave Bilgi" };
    return (
      <div>
        <Container>
          <Row>
            <Navigate
              sepet={this.state.sepet}
              sepettenCikar={this.sepettenCikar}
            />
          </Row>
          <Row>
            <Col xs="3">
              <Category
                seciliKategori={this.state.seciliKategori}
                kategoriDegistir={this.kategoriDegistir}
                bilgiKategori={bilgiKategori}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <UrunListesi
                      sepeteEkle={this.sepeteEkle}
                      seciliKategori={this.state.seciliKategori}
                      ürünler={this.state.ürünler}
                      baslik="Ürün Listesi"
                    />
                  }
                />
                <Route
                  path="/sepet"
                  element={
                    <SepetListesi
                      sepet={this.state.sepet}
                      sepettenCikar={this.sepettenCikar}
                    />
                  }
                />
                <Route path="/form" element={<FormDemo />} />
                <Route path="/form2" element={<FormDemo2 />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
