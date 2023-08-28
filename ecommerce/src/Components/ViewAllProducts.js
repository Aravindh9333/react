import React, { Component } from 'react'
import axios from 'axios'
import Admin from './AdminHeader'

export default class ViewAllProducts extends Component {
  constructor(props) {
    super(props)
    this.state={
        products: []
    }
}

componentDidMount = (e)=>{
    this.fetchAllProducts();
}

fetchAllProducts=(e)=>{
    axios.get("http://localhost:8080/product/viewall").then((result)=>{
        this.setState({products: result.data});
    })
}
deletehandler=(e)=>
{
   axios.delete("http://localhost:8080/product/delete/"+e) .then((result)=>
   {
    if(result.data)
    {
        alert('Deleted Successfully');
        this.fetchAllProducts();
    }
    else{
        alert('Failed to Delete');
        this.fetchAllProducts();
    }
   })
}

render() {
return (
    <>
  <Admin/>
  <div>
    <h1>All Products</h1>
    {this.state.products.length>0 ? (
            <table border="2" width={50} cellPadding={30}>

            {this.state.products.map(product => (

                <div>

                <tr><td key={product.id}>{product.id}</td>

                <td key={product.name}>{product.name}</td>

                <td key={product.quantity}>{product.quantity}</td>

                <td key={product.price}>{product.price}</td>

                <td> <button onClick={()=>this.deletehandler(product.id)}>Delete</button></td>

                </tr>
                </div>
            ))}

        </table>
    ): (
        <div>
            <p>No products Present</p>
        </div>
    )}
  </div>
  </>
)
}
}
  