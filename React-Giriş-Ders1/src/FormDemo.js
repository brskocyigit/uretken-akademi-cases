import React, { Component } from 'react'

export default class FormDemo extends Component {
    state = {kullaniciAdi:'',sehirAdi:''}

    onChangeHandle=(e)=>{
        // this.setState({kullaniciAdi:e.target.value})
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]:value})

    }

    onSubmitHandle=(e)=>{
        e.preventDefault();
        alert(this.state.kullaniciAdi);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandle}>
            <h3>Kullanıcı Adı</h3>
            <input name="kullaniciAdi" type="text" onChange={this.onChangeHandle}/>
            <h2>{this.state.kullaniciAdi}</h2>
           

            <h3>Sehir</h3>
            <input name="sehirAdi" type="text" onChange={this.onChangeHandle}/>
            <h2>{this.state.sehirAdi}</h2>
            <input type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}
