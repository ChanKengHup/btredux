let qlnd = {
    mangND: [
        {taiKhoan: 'user123', hoTen: 'Trần Văn Dũng',matKhau: '12345',
         sdt: '0961237278', email: 'dungk51a2@gmail.com',
         loaiND: 'khachHang'
        },
        {taiKhoan: 'user456', hoTen: 'Trần Văn Ngọc',matKhau: '12342135',
         sdt: '0961237278', email: 'dungk51a2@gmail.com',
         loaiND: 'khachHang'
        },
    ]
}

export const quanLyNDReducer = (state = qlnd, action) => {
    switch(action.type) {
        case 'ADD__DATA': {
            state.mangND = [...state.mangND, action.NDung]
            return {...state}
        }
        default: return state
    }
}