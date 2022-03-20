import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {

    // showResult = () => {
    //     let {arrXucXac} = this.props.gameTaiXiu
    //     let tongDiem = arrXucXac.reduce((total, current) => {
    //         return total + current.diem
    // }, 0) 
    //  let kq = tongDiem >=11 ? 'Tài' : "Xỉu"
    //     return `${kq} - ${tongDiem}`
    // }
  render() {
    let {yourChoice,soBanThang, tongSoBan} = this.props.gameTaiXiu
    let {dispatch} = this.props

    return (
      <div>
          
          <p>Bạn chọn : <span className='text-warning'>
              {yourChoice === true ? 'Tài' : 'Xỉu'}
              </span></p>
          <p>Số bàn thắng : <span className='text-success'>{soBanThang}</span></p>
          <p>Tổng số lần chơi : <span className='text-primary'>{tongSoBan}</span></p>
          <button className='btn btn-success' onClick={() => {
                let action = {
                    type: 'PLAY__GAME'
                }  
                dispatch(action)

          }}>PLAY GAME</button>
      </div>
    )
  }
}

const mapStoreToProps = (rootReducer) => {
    return {
        gameTaiXiu: rootReducer.gameTaiXiuReducer
    }
}

export default connect(mapStoreToProps)(KetQua) 
