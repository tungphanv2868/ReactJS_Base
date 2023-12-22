import React, { Component } from 'react'
import UserProfile from './UserProfile'
import { faker } from '@faker-js/faker';

export default class DemoProps extends Component {
    state = {
        userName : 'Alice',
    }

    handleChangeName = () => {
        this.setState({
            userName : faker.animal.bird(),
        });
    };
  render() {
    // let userName = 'Alice';
    return (
      <div>
        <h2>UserProps</h2>
        <p>
            <UserProfile
            handleChange = {this.handleChangeName}
             username = {this.state.userName} 
            title="thong tin nguoi dung"/>
        </p>
      </div>
    )
  }
}
