import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DSSpham extends Component {
    
    render() {
        let {arrProduct} = this.props
    return (
      <div className='row'>
            {arrProduct.map((item, index) =>(
                <div className='col-4' key={index}>
                        <SanPham  item={item}/>
                </div>
            ))}        
      </div>
    )
  }
}
