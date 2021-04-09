import React, { Component } from 'react';

class User extends Component {

    state = {
        users : []
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/').then(response => {
            response.json().then(data => {
                this.setState({users : data.results})
            })
        })
    }

    enter = (e) => {
        e.currentTarget.innerHTML = this.state.users[0].name.last;
    }

    leave = (e) => {
        e.currentTarget.innerHTML = this.state.users[0].name.first;
    }
    
    hover = (e) => {
        // console.log(e.currentTarget.children);
        e.currentTarget.classList.add('hovered');

    }

    unHover = (e) => {
        // console.log(e.currentTarget.children);
        e.currentTarget.classList.remove('hovered');
    }

    render() {
        
        return (
            <div>
                {this.state.users.map((user,index) => <li key={index} onMouseOver={this.hover}
                onMouseLeave={this.unHover}>
                        
                        <img src={user.picture.large} alt={user.name.first}/>
                        <h2 onMouseEnter={this.enter} onMouseLeave={this.leave}>{user.name.first}</h2>
                        <i className='fa fa-trash'></i>
                        <div className='hover'></div>
                    </li>
                )}
            </div>
        )
    }
}
export default User;
