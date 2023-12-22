import React, { Component } from 'react'
import HeaderLayout from './HeaderLayout'
import NavLayout from './NavLayout'
import Footer from './Footer'
import Content from './Content'



export default class ExLayout extends Component {
  render() {
    return (
      <div>
        <HeaderLayout/>
        <div className='row'>
            <div className='col-4 p-0'>
            <NavLayout/>
            </div>
            <div className='col-8 p-0'>
            <Content/>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
