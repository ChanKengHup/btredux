import React, { Component } from 'react'

// Thư viện để kết nối react component vs store redux

import { connect } from 'react-redux'

class GioHang extends Component {
  render() {
      let {gioHang, dispatch} = this.props
      console.log(gioHang);
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                             <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Mã</th>
                                    <th scope="col">Hình</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Thành tiền</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        gioHang.map((item,index) => (
                                            <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img style={{width: '50px'}} className='img-fluid' src="./imgCar/CarBasic/imgPhone/applephone.jpg" alt='' />
                                            </td>
                                            <td>{item.tenSP}</td>
                                            <td>
                                                <button 
                                                onClick={() => {
                                                    let action={
                                                        type: "TANG_GIAM_SL",
                                                        maSP: item.maSP,
                                                        quanity: -1
                                                    }
                                                    dispatch(action)
                                                }}  className="btn btn-success">-</button>
                                                <span>{item.quanity}</span>
                                                <button onClick={() => {
                                                     let action={
                                                        type: "TANG_GIAM_SL",
                                                        maSP: item.maSP,
                                                        quanity: 1
                                                    }
                                                    dispatch(action)
                                                }} className="btn btn-info">+</button>
                                            </td>
                                            <td>
                                                {item.giaBan}
                                            </td>
                                            <td>
                                                {item.giaBan*item.quanity}
                                            </td>
                                            <td>
                                                <button onClick={() => {
                                                    let action = {
                                                        type: 'XOA_SAN_PHAM',
                                                        maSP: item.maSP
                                                    }
                                                    dispatch(action)
                                                }} className="btn btn-danger">Xóa</button>
                                            </td>
                                            </tr>

                                        ))
                                    }
                                </tbody>
                                </table>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
      gioHang: rootReducer.gioHangReducer
  }
}

// Tạo ra component mới đc kết hợp từ store redux và react component chứa state của redux, chứa UI react Component
const componentGioHangRedux = connect(mapStateToProps)(GioHang)

export default  componentGioHangRedux
