import React, { Component } from 'react'
import axios from 'axios'
import Admin from './AdminHeader';

export default class Welcome2 extends Component {
  constructor()
    {
        super();
        this.state={
            username:"",
            password:"",
            address:"",
            mobile:"",
        }
    }
    changeusername =(event)=>{
      this.setState({username: event.target.value});
  }
  changepassword =(event)=>{
      this.setState({password: event.target.value});
  }
  changeaddress =(event)=>{
    this.setState({address: event.target.value});
}
changemobile =(event)=>{
    this.setState({mobile: event.target.value});
}
adduser = (e)=>{
  e.preventDefault();
  const userdata ={username: this.state.username, password: this.state.password, mobile: parseFloat(this.state.mobile), address: this.state.address, status: 'blocked'}
  axios.post("http://localhost:8080/adminuser/add",userdata).then((res)=>{
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
        <form onSubmit={this.adduser}>
          <div>
            Enter User Name :
            <br></br>
            <input type="text" name="username" className='form-control' onChange={this.changeusername}></input><br /><br />
            Password:
            <br></br>
            <input type="password" name="passwd" className='form-control'onChange={this.changepassword}></input><br /><br />
            Address:
            <br></br>
            <textarea rows="4" cols="50" className='form-control' onChange={this.changeaddress}></textarea>
            <br></br>
            Mobile:
            <br></br>
            <input type="mobile" className='form-control' onChange={this.changemobile}></input>
            <br></br>
            <input className='btn btn-success' type="submit" value="submit"/>
          </div>
        </form>
      </div>
      </>
    )
  }
}
