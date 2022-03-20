import React, { Component } from 'react'
import { connect } from 'react-redux'

 class KeoBuaBao extends Component {
  render() {
    let {dispatch} = this.props
    let {picture} = this.props
    return (
      <div className='row keobuabao'>
          <div className="col-4 keobuabao__item">
              <div  className="keobuabao__img">
                <img src={picture.hinhIron} alt="" />

              </div>
              <img src="./imgCar/GameOanTuTi/video_23_game_oan_tu_ti/player.png" alt="" />
              <div className="keobuabao__iron">
                <div onClick={() => {
                  let action = {
                    type: 'YOUR__CHOICE',
                    yourChoice: './imgCar/GameOanTuTi/video_23_game_oan_tu_ti/keo.png',
                    choice: 'keo'
                  }
                  dispatch(action)
                }}  className="keobuabao__iron__item">
                 <img src="./imgCar/GameOanTuTi/video_23_game_oan_tu_ti/keo.png" alt="" />
                    
                </div>
                <div onClick={() => {
                  let action = {
                    type: 'YOUR__CHOICE',
                    yourChoice: '/imgCar/GameOanTuTi/video_23_game_oan_tu_ti/bao.png',
                    choice: 'bao'

                  }
                  dispatch(action)
                  
                }} className="keobuabao__iron__item">
                 <img src="./imgCar/GameOanTuTi/video_23_game_oan_tu_ti/bao.png" alt="" />
                    
                </div>


                <div onClick={() => {
                  let action = {
                    type: 'YOUR__CHOICE',
                    yourChoice: './imgCar/GameOanTuTi/video_23_game_oan_tu_ti/bua.png',
                    choice: 'bua'

                  }
                  dispatch(action)
                  
                }} className="keobuabao__iron__item">
                 <img src="./imgCar/GameOanTuTi/video_23_game_oan_tu_ti/bua.png" alt="" />
                    
                </div>

              </div>
          </div>
          <div className="col-4">
             <h1>I'm iron man,<br></br> i love you 3000 !!</h1>
            
          </div>
          <div className="col-4  keobuabao__item">
          <div className="keobuabao__img">
                <img src={picture.hinhThanos} alt="" />

              </div>
          <img src="./imgCar/GameOanTuTi/video_23_game_oan_tu_ti/playerComputer.png" alt="" />
              
          </div>
      </div>
    )
  }
}

const mapToProps = (rootReducer) => {
  return {
    picture: rootReducer.oanTuTiReducer
  }
}
export default connect(mapToProps)(KeoBuaBao)