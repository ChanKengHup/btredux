import React, { Component } from 'react'
import KeoBuaBao from './KeoBuaBao'
import KetQua from './KetQua'
import './oanTuTi.css'
export default class OanTuTi extends Component {
  render() {
    return (
      <div className='container-fluid bg__bt text-center'>
          <KeoBuaBao/>
          <KetQua/>

      </div>
    )
  }
}
