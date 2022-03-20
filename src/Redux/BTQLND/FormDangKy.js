import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormDangKy extends Component {

    state = {
        values: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            sdt: '',
            email: '',
            loaiND: 'khachHang'
        },
        errors: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            sdt: '',
            email: '',
            loaiND: ''
        }
    }

    render() {
        const handeInput = (e) => {
            let {value, name} = e.target
            // let newState = {
            //     [name]: value
            // }
            // this.setState(newState)

            let newValues = {...this.state.values}
            newValues[name] = value

            let newErrors = {...this.state.errors}
            let message = ''
            // Kiểm tra rỗng
            
            if(value.trim() === '') {
                message = name + ' không được để trống';
            }
            // kiểm tra email
            let atrrValue = e.target.getAttribute('data-type')
            let regex = ''
            if( atrrValue === 'email') {
                regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if(!regex.test(value)) {
                    message = name + ' không đúng định dạng'
                }
                
            }
            newErrors[name] = message



            this.setState({
                values: newValues,
                errors: newErrors
            })
        }
        let {dispatch} = this.props
        const handleSubmit = (e) => {
            e.preventDefault()
            let isValid = true

            // Duyệt từng thuộc tính của obj
            for(let key in this.state.errors ) {
                if(this.state.errors[key] !== '') {
                    isValid = false;
                    break;
                }
            }
            if(!isValid) {
                return;  
            }
            let action = {
                type: 'ADD__DATA',
                NDung: this.state.values
            }
            dispatch(action)
        }

        let {taiKhoan, hoTen,matKhau, sdt, email, loaiND} = this.state.errors
        return (
            <div className="card mt-5">
                <div className="card-header bg-dark text-white">
                    Form Đăng Kí
                </div>
                <form onSubmit={handleSubmit}>

                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Tài Khoản</label>
                                <input onChange={handeInput} type="text" name='taiKhoan' className="form-control" id="inputEmail4" />
                                <p className='text-danger'>{taiKhoan}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Họ Tên</label>
                                <input onChange={handeInput} type="text" name='hoTen' className="form-control" id="inputEmail4" />
                                <p className='text-danger'>{hoTen}</p>
                                
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Mật khẩu</label>
                                <input onChange={handeInput} type="password" name='matKhau' className="form-control" id="inputEmail4" />
                                <p className='text-danger'>{matKhau}</p>

                            </div>
                            <div className="form-group col-md-6">
                                <label>Số điện thoại</label>
                                <input onChange={handeInput} type="text" name='sdt' className="form-control" id="inputEmail4" />
                                <p className='text-danger'>{sdt}</p>
                                
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input data-type='email' onChange={handeInput} type="email" name='email' className="form-control" id="inputEmail4" />
                                <p className='text-danger'>{email}</p>
                            
                            </div>
                            <div className="form-group col-md-6">
                                <label>Mã loại người dùng</label>
                                <select name="loaiND" className="form-control">
                                    {/* <option >Hãy chọn loại</option> */}
                                    <option value="khachHang">Khách hàng</option>
                                    <option value="nhanVien">Nhân viên</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer">
                        <button className='btn btn-success mr-2'>Đăng kí</button>
                        <button className='btn btn-primary'>Cập nhật</button>
                    </div>
                </form>
            </div>

        )
    }
}


export default connect()(FormDangKy)