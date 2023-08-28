import React, { Component } from 'react'
import axios from 'axios'
import Admin from './AdminHeader'
export default class UnBlock extends Component {
    constructor(props) {
        super(props)
        this.state={
            users: []
        }
    }

    componentDidMount = (e)=>{
        this.fetchAllUser();
    }

    fetchAllUser=(e)=>{
        axios.get("http://localhost:8080/adminuser/viewall").then((result)=>{
            this.setState({users: result.data});
        })
    }
    unblockhandler=(e)=>
    {
       axios.put("http://localhost:8080/adminuser/unblock/"+e) .then((result)=>
       {
        if(result.data)
        {
            alert('UnBlocked Successfully');
            this.fetchAllUser();
        }
        else{
            alert('Failed to UnBlock');
            this.fetchAllUser();
        }
       })
    }

  render() {
    return (
        <>
      <Admin/>
      <div>
        <h1>All Users</h1>
        {this.state.users.length>0 ? (
                <table border="2" width={50} cellPadding={30}>

                {this.state.users.map(user => (

                    <div>

                    <tr><td key={user.id}>{user.id}</td>

                    <td key={user.username}>{user.username}</td>

                    <td key={user.password}>{user.password}</td>

                    <td key={user.address}>{user.address}</td>
                    <td key={user.mobile}>{user.mobile}</td>
                    <td key={user.status}>{user.status}</td>

                    <td> <button onClick={()=>this.unblockhandler(user.id)}>UnBlock</button></td>

                    </tr>
                    </div>
                ))}

            </table>
        ): (
            <div>
                <p>No Users Present</p>
            </div>
        )}
      </div>
      </>
    )
  }
}
