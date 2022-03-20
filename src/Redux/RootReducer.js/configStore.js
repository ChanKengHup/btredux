import { combineReducers, createStore } from "redux";
import {gameTaiXiuReducer} from './gameTaiXiuReducer'
import {xucXacReducer} from './xucXacReducer'
import {quanLyNDReducer} from './QLNDReducer'
import {oanTuTiReducer} from './oanTuTiReducer'
let gioHang = []

const rootReducer = combineReducers({
    gioHangReducer: ( state = gioHang,action ) => {
        switch(action.type) {
            case 'THEM_GIO_HANG': {

                let quanity = action.quanity
                let spGH = {...action.sanPhamGH, quanity}
                console.log(spGH);
                
                let gioHangUpdate = state
                
                let spFind = gioHangUpdate.find((sp) => sp.maSP === spGH.maSP) 
                if(spFind) {
                    spFind.quanity += 1
                }
                else {
                  gioHangUpdate = [...gioHangUpdate,spGH]

                 }
                return [...gioHangUpdate]
            }
            case 'XOA_SAN_PHAM': {
                let gioHangCapNhat = state.filter((item) => {
                    return item.maSP !== action.maSP
                })
                return [...gioHangCapNhat]
            }
            case 'TANG_GIAM_SL': {
                let gioHangUpdate = state
                let spFind = gioHangUpdate.find((sp) => sp.maSP === action.maSP) 
                if(spFind) {
                    spFind.quanity += action.quanity
                    if(spFind.quanity < 1 ) {
                        spFind.quanity -= action.quanity
                    }
                }
                return [...gioHangUpdate]
            }
            default:   return state
            }
    },
    gameTaiXiuReducer,
    xucXacReducer,
    quanLyNDReducer,
    oanTuTiReducer

})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )