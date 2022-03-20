import React, { Component } from 'react'
import DSNguoiDung from './DSNguoiDung'
import FormDangKy from './FormDangKy'

export default class BTQLND extends Component {
  render() {
    return (
      <div className='container'>
          <FormDangKy/>
          <DSNguoiDung/>
      </div>
    )
  }
}
