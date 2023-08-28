import React, { Component } from 'react'
import Admin from './AdminHeader';
import axios from 'axios';


export default class AddProduct extends Component {
    constructor()
    {
        super();
        this.state={
            name:"",
            quantity:"",
            price:"",
            
        }
    }
    changename =(event)=>{
        this.setState({name: event.target.value});
    }
    changequantity =(event)=>{
        this.setState({quantity: event.target.value});
    }
    changeprice =(event)=>{
      this.setState({price: event.target.value});
  }
  addproduct = (e)=>{
    e.preventDefault();
    const productdata ={name: this.state.name, quantity: parseInt(this.state.quantity), price: parseFloat(this.state.price)}
    axios.post("http://localhost:8080/product/add",productdata).then((res)=>{
      if(res.data)
      {
        window.confirm("success");
      }
      else{
        window.alert("failed");
      }
      window.location.reload(false);
    })
  }

  render() {
    return (
        <>
        <Admin/>
        <div className='container row card col-md-6 offset-md-3 offset-md-3' style={ {backgroundColor:'grey' }}>
          <form onSubmit={this.addproduct}>
            <div>
              Enter Name :
              <br></br>
              <input type="text" name="name" className='form-control' onChange={this.changename}></input><br /><br />
              Quantity:
              <br></br>
              <input type="text" name="quantity" className='form-control'onChange={this.changequantity}></input><br /><br />
              
              Price:
              <br></br>
              <input type="text" name="price" className='form-control' onChange={this.changeprice}></input>
              <br></br>
              <input className='btn btn-success' type="submit" value="Add Product"/>
            </div>
          </form>
        </div>
       </>
      )
    
  }

}