import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let displayCount = ()=>{
      if (this.props.userCount) {
        return <li>{this.props.userCount}</li>
      }

    }
    let displayUser = () =>{
      let nameArr = this.props.users.map((e)=> {
        return `${e.username},${e.hometown}`
      })
      if (nameArr.length !== 0) {
        return <li>{nameArr}</li>
      }
    }
    return (
      <div>
        <ul>


          {displayUser()}
          {displayCount()}


        </ul>

      </div>
    )
  }
}

let apple = (state)=>{
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(apple)(Users)
