
// Khai báo state

let gameTaiXiu = {
    yourChoice: true,
    soBanThang:0,
    tongSoBan:0,
    arrXucXac: [
        {hinh:'./imgCar/GameTaiXiu/video_19_game_xuc_xac/1.png', diem:1},
        {hinh:'./imgCar/GameTaiXiu/video_19_game_xuc_xac/2.png', diem:2},
        {hinh:'./imgCar/GameTaiXiu/video_19_game_xuc_xac/3.png', diem:3},
    ]
}
// tạo store redux
export const gameTaiXiuReducer = (state = gameTaiXiu, action) => {
    switch(action.type) {
        case 'DAT__CUOC': {
            state.yourChoice = action.chon 
            return {...state}
        }
        case 'PLAY__GAME': {
           
            let mangNgauNhien = [];
            for(let i = 0; i < 3; i++) {
                let interger =  Math.floor(Math.random() * 6 ) + 1;
                let obj = {
                    hinh:`./imgCar/GameTaiXiu/video_19_game_xuc_xac/${interger}.png`,
                    diem: interger
                }
                mangNgauNhien.push(obj)
            }
            state.arrXucXac = mangNgauNhien;

            let tongDiem = mangNgauNhien.reduce((total, current) => {
                    return total + current.diem
            }, 0)

            if( (state.yourChoice && tongDiem >=11) || (!state.yourChoice && tongDiem < 11)) {
                state.soBanThang +=1
            }
                state.tongSoBan++

            return {...state}

        }

        default: 
                return state;
    }
}