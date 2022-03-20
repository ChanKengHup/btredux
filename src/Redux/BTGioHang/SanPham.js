import React, { Component } from 'react'

import { connect } from 'react-redux'

class SanPham extends Component {
  render() {
      console.log(this.props);
      let { item, dispatch } = this.props
    return (
        <div className="card">
        <img src={item.hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{item.tenSP}</h5>
            <p className="card-text">{item.giaBan}</p>
           <button onClick={() => {
               
               let action = {
                   type: 'THEM_GIO_HANG',
                   sanPhamGH: item,
                   quanity:1
               }
               dispatch(action)
           }} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Thêm giỏ hàng
            </button>

        </div>
    </div>
    )
  }
}

const componentSPRedux = connect()(SanPham)
export default componentSPRedux
