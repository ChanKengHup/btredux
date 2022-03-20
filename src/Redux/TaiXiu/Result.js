import React, { Component } from 'react'

import {connect} from 'react-redux'
class Result extends Component {
  render() {
      let {dispatch} = this.props
      let {yourChoice, timesWin, totalPlay} = this.props.objXucXac
    return (
      <div className='result'>
          <p>Bạn chọn: <span className={`${yourChoice === true ? 'text-success' : 'text-danger'}`}>
              {yourChoice === true ? 'Tài' : 'Xỉu'}
            </span></p>
          <p>Số lần thắng: <span className='text-center'>{timesWin}</span></p>
          <p>Tổng số lần chơi: <span className='text-danger'>{totalPlay}</span></p>
          <button className='btn btn-success'
          onClick={() => {
              let action = {
                  type: 'PLAY__GAME'
              }
              dispatch(action)
          }}
          >PLAY GAME</button>
      </div>
    )
  }
}


const mapToStateProps = (rootReducer) => {
    return {
        objXucXac: rootReducer.xucXacReducer
    }
}

export default connect(mapToStateProps)(Result)