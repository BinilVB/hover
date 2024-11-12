import React, { Component } from 'react';
import "./Index.css"

export default class Index extends Component {
  render() {
    return (
      <div className='login'>
        
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <p>Forgot password?</p>
        </form>
      </div>
    )
  }
}
