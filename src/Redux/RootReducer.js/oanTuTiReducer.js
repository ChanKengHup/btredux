let oanTuTi = {
    timesWin: 0,
    timesPlay: 0,
    hinhIron: './imgCar/GameOanTuTi/video_23_game_oan_tu_ti/bua.png',
  
    hinhThanos: './imgCar/GameOanTuTi/video_23_game_oan_tu_ti/bua.png', 
    point:1,
    choice: ''
  
    
    
}

export const oanTuTiReducer = (state = oanTuTi, action) => {
    switch(action.type) {
        case 'YOUR__CHOICE': {
            state.hinhIron = action.yourChoice
            state.choice = action.choice
            return {...state}
        }
        case 'RANDOM__PIC': {
            let arrChoi = ['bua', 'bao', 'keo']
            
               let randomNum = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
               let obj = {
                   hinh: `./imgCar/GameOanTuTi/video_23_game_oan_tu_ti/${arrChoi[randomNum]}.png`
               }
               state.hinhThanos = obj.hinh
               
               if( state.choice ==='bua' && arrChoi[randomNum] === 'keo') {
                   state.timesWin++
               }
               else if(state.choice ==='keo' && arrChoi[randomNum] === 'bao') {
                 state.timesWin++

               }
               else if(state.choice ==='bao' && arrChoi[randomNum] === 'bua') {
                state.timesWin++

              }
             
               state.timesPlay++

            return {...state}
        }
        default: return state
    }
}