import React from 'react'
import './EditProduct.scss'
import { Link } from 'react-router-dom'

export default function EditProduct() {
    return (
        <>
            <div className="edit-product">
                <div className="editProduct-title-container">
                    <h2 className="editProduct-title">
                        Edit Product
                    </h2>
                    <Link to='/newProduct' className='editProduct-btn link'>create</Link>

                </div>
            </div>
        </>
    )
}
