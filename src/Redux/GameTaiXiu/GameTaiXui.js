import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'
import './GameTaiXiu.css'

export default class GameTaiXui extends Component {
  render() {
    return (
      <div className='container-fluid text-center gameTaiXiu'>
          <h1>Game Đỗ Xúc Xắc</h1>
          <XucXac/>
          <KetQua/>
      </div>
    )
  }
}
