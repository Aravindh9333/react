import React, { Component } from 'react'
import axios from 'axios';

export default class Welcome extends Component {
    constructor()
    {
        super();
        this.state={
            username:"",
            password:"",
        }
    }
    
    changeusername =(event)=>{
        this.setState({username: event.target.value});
    }
    changePassword =(event)=>{
        this.setState({password: event.target.value});
    }
    submitform=(e)=>{
        e.preventDefault();
        let user={username: this.state.username,password: this.state.password}
        console.log("user is ",user);
        axios.post("http://localhost:8080/login",user).then((result)=>{
            if (result.data)
            {

                window.location.href='/admin';
            }
            else{
                window.alert("failure");
            }
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitform}>
            Enter username : 
            <input type="text" placeholder="enter the user name" onChange={this.changeusername}/><br/>
            Enter Password :
            <input type="password" placeholder="enter the password" onChange={this.changePassword}/><br/>
            <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
