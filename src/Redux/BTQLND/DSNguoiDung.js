import React, { Component } from 'react'
import { connect } from 'react-redux'

 class DSNguoiDung extends Component {
    render() {
        let {mangND} = this.props.arrND
        console.log(mangND);
        return (
            <div className='card mt-5'>
                <div className="card-header bg-dark text-white">
                    Danh sách người dùng
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tài Khoản</th>
                                <th scope="col">Họ tên</th>
                                <th scope="col">Mật khẩu</th>
                                <th scope="col">Email</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">Loại người dùng</th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
                            {mangND.map((item,index) => (

                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.taiKhoan}</td>
                                    <td>{item.hoTen}</td>
                                    <td>{item.matKhau}</td>
                                    <td>{item.email}</td>
                                    <td>{item.sdt}</td>
                                    <td>{item.loaiND}</td>
                                    <td>
                                        <button className='btn btn-danger mr-2'>Xóa</button>
                                        <button className='btn btn-info'>Xem</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

const mapToProps = (rootReducer) => {
  return {
      arrND: rootReducer.quanLyNDReducer
  }
}
export default connect(mapToProps)(DSNguoiDung)