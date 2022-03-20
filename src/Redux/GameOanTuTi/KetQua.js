import React, { Component } from 'react'
import { connect } from 'react-redux'
 class KetQua extends Component {
  render() {
    let {dispatch} = this.props
    let {arrOan} = this.props
    return (
      <div className='ketqua'>
          <p className='text-success'>Số lần thắng: <span>{arrOan.timesWin}</span></p>
          <p className='text-success'>Số lần chơi:  <span>{arrOan.timesPlay}</span></p>
          <button onClick={() => {
            let action = {
                type: 'RANDOM__PIC',
            }
            dispatch(action)
          }} className='btn btn-success'>PLAY GAME</button>
      </div>
    )
  }
}
const mapToProps = (rootReducer) => {
  return {
    arrOan: rootReducer.oanTuTiReducer
  }
}
export default connect(mapToProps)(KetQua)
