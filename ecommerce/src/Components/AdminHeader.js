import React, { Component } from 'react'
import AddUser from './AddUser';

export default class Admin extends Component {
    constructor(){
        super();
        
    }

    changeUserOption = (event) =>{
        event.preventDefault();
        if(event.target.value==='adduser')
        {
            window.location.href='/admin/adduser';
        }
        else if(event.target.value==='viewallusers')
        {
            window.location.href='/admin/viewallusers';
        }
        else if(event.target.value==='blockusers')
        {
            window.location.href='/admin/blockusers';
        }
        else if(event.target.value==='unblockusers')
        {
            window.location.href='/admin/unblockusers'
        }
        
    }
    changeProductOption = (event) =>{
        event.preventDefault();
        if(event.target.value==='addproduct')
        {
            window.location.href='/admin/addproduct';
        }
        else if(event.target.value==='viewallproducts')
        {
            window.location.href='/admin/viewallproducts';
        }
        else if(event.target.value==='deleteproduct')
        {
            window.location.href='/admin/deleteproduct';
        }
        
    }

  render() {
    return (
      <div >
       <div className='row' style={{backgroundColor: 'grey', padding: '10px'}}>
        <div className='col-md-2'></div>
        <div className='col-md-4'>
            <select onChange={this.changeUserOption} style={{backgroundColor: 'darkgrey'}}>
                <option selected>User Operations</option>
                <option value="adduser">Add User</option>
                <option value="viewallusers">View all Users</option>
                <option value="blockusers">Block Users</option>
                <option value="unblockusers">Unblock Users</option>
            </select>
        </div>
        <div className='col-md-6'>
            <select onChange={this.changeProductOption} style={{backgroundColor: 'darkgrey'}}>
                <option selected>Product Operations</option>
                <option value="addproduct">Add Product</option>
                <option value="viewallproducts">View all Products</option>
                <option value="deleteproduct">Delete Products</option>
            </select>
        </div>
        </div>
       <br></br>
      </div>
    )
  }
}
