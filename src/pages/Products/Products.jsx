import React, { useEffect, useState } from 'react'
import './Products.scss'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export default function Products() {
    const [productsDetails, setProductsDetails] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/fetch-products', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        }).then(
            response => response.json()
        ).then(
            data => setProductsDetails(data.products)
        )
    }, [])


    const productDeleteHandler = productID => {
        setProductsDetails(productsDetails.filter(product => product.id !== productID))
    }


    return (
        <>
            <div className="products">
                <h2 className='products-title'>List of products</h2>
                <div className="products-wrapper">
                    {productsDetails.map(item => (
                        <div className="product-container">
                            <div className="product-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="product-details">
                                <h3 className="product-name">{item.name}</h3>
                                <p>{item.desc}</p>
                                <h3 className="product-price">{item.price}</h3>
                            </div>
                            <div className="product-actions-container">
                                <Link to={`edit-product/${item.id}`} className='link product-actions-linkElem' >
                                    Edit
                                    <EditIcon fontSize='medium' />
                                </Link>
                                <Link className='link product-actions-linkElem' >
                                    Delete <DeleteIcon fontSize='medium' color='error' onClick={() => productDeleteHandler(item.id)} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
