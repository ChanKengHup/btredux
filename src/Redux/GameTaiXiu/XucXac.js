import React, { Component } from 'react'

import { connect } from 'react-redux'

class XucXac extends Component {
  render() {
      let {dispatch} = this.props
        let {arrXucXac} = this.props.gameTaiXiu
    return (
      <div className='row'>
          <div className="col-4">
              <button className='btn btn-info' onClick={() => {
                  let action = {
                    type: 'DAT__CUOC',
                    chon: true
                  }
                  dispatch(action)
              }}>Tài</button>
          </div>
          <div className="col-4">
              <img src={arrXucXac[0].hinh} alt="" />
              <img src={arrXucXac[1].hinh} alt="" />
              <img src={arrXucXac[2].hinh}  alt="" />
          </div>
          <div className="col-4">
          <button className='btn btn-info' onClick={() => {
                  let action = {
                    type: 'DAT__CUOC',
                    chon: false
                  }
                  dispatch(action)
              }}>Xỉu</button>
          </div>
      </div>
    )
  }
}

const mapStoreToProps = (rootReducer) => {
    return {
        gameTaiXiu: rootReducer.gameTaiXiuReducer
    }
}

export default connect(mapStoreToProps)(XucXac)