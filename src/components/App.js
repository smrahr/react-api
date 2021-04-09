import React, { Component } from 'react';
import User from './User';

export default class App extends Component {
  state={
    number : 0 ,
    showNUmber :0
  }

  changeNumber = (e) =>{
    this.setState({
      number: Number(e.currentTarget.value)
    })
  }

  show = (e) =>{
    e.preventDefault();
    this.setState({
      showNUmber : this.state.number
    })
  }

  render() {
    const users = []
    for (let i = 0; i < this.state.showNUmber; i++) {
      users.push(<User />)    
    }

    return (
      <div>
        <form className='form-user-number'>
          <input onChange={this.changeNumber} type='text' placeholder='enter a number'/>
          <button onClick={this.show}>Click Me</button>
        </form>
        <ul className='users'>
        {users}
        </ul>
      </div>
    )
  }
}
