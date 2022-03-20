let arrGame = {
    arrXucXac: [
        {hinh:'./imgCar/GameTaiXiu/video_19_game_xuc_xac/1.png', point: 1},
        {hinh:'./imgCar/GameTaiXiu/video_19_game_xuc_xac/2.png', point:2},
        {hinh:'./imgCar/GameTaiXiu/video_19_game_xuc_xac/3.png', point:3}
    ],
    yourChoice: true,
    timesWin:0,
    totalPlay: 0
}
export const xucXacReducer = (state = arrGame, action) => {
    switch(action.type) {
        case 'TAI__XIU': {
            state.yourChoice = action.yourChoice
            return {...state}
        }
        case 'PLAY__GAME': {
            // Đổi xúc xắc
            let newArr = []
            for(let i = 0; i <3; i++) {
                let randomNum = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
               let newObj ={
                   hinh:`./imgCar/GameTaiXiu/video_19_game_xuc_xac/${randomNum}.png`, 
                   point: randomNum}
                   newArr.push(newObj)
            }
            state.arrXucXac = newArr
            // tính điểm
            let tongPoint = newArr.reduce((total, current) => {
                    return total + current.point
            }, 0)
            if((state.yourChoice && tongPoint%2 === 0) || (!state.yourChoice && tongPoint%2 !== 0) ) {
                state.timesWin +=1
            } 
                state.totalPlay++
            return {...state}
        }
        default:
             return {...state}
    }
    }
