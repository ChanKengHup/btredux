import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXacs extends Component {
  render() {
      let {dispatch} = this.props
      let {arrXucXac} = this.props.objXucXac
    return (
      <div className='row xucxac'>
         <div className="col-4">
             <button className='btn btn-success'
             onClick={() => {
                 let action = {
                     type:'TAI__XIU',
                     yourChoice: true
                 }
                 dispatch(action)
             }}>Tài</button>
         </div>
         <div className="col-4">
            <img src={arrXucXac[0].hinh} alt="" />
            <img src={arrXucXac[1].hinh} alt="" />
            <img src={arrXucXac[2].hinh} alt="" />
         </div>
         <div className="col-4">
             <button className='btn btn-danger'
              onClick={() => {
                let action = {
                    type:'TAI__XIU',
                    yourChoice: false
                }
                dispatch(action)
            }}>Xỉu</button>
         </div>
      </div>
    )
  }
}

const mapToStateProps = (rootReducer) => {
    return {
        objXucXac: rootReducer.xucXacReducer
    }
}

export default connect(mapToStateProps)(XucXacs)
