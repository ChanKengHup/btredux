import React, { Component } from 'react'


import Result from './Result'
import XucXacs from './XucXacs'
import './TaiXiu.css'

export default class TaiXiu extends Component {
  render() {
    return (
      <div className='container-fluid text-center bg-xucxac'>
          <h1>GAME ĐỔ XÚC XẮC</h1>
          <XucXacs/>
          <Result/>
      </div>
    )
  }
}
