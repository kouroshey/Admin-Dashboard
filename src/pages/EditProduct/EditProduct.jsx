import React, { useEffect, useState } from 'react'
import './EditProduct.scss'
import { Link, useParams } from 'react-router-dom';
import Chart from '../../components/chart/Chart'


export default function EditProduct() {


    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/fetch-product-chart-data', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(response => response.json())
            .then(data => setChartData(data.data))
    }, [])

    const [productData, setProductData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            
            fetch('http://localhost:5000/fetch-products', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            })
                .then(response => response.json())
                .then(data => setProductData(data.products))
            
        }
        fetchData();
    }, [])


    let mainProductID = useParams().productID - 1
    let mainProduct = productData[mainProductID]
    console.log(mainProduct)


    return (
        <>
            <div className="edit-product">
                <div className="editProduct-title-container">
                    <h2 className="editProduct-title">
                        Edit Product
                    </h2>
                    <Link to='/newProduct' className='editProduct-btn link'>create</Link>
                </div>

                <div className="edit-product-top">

                    <div className="edit-product-top-left">
                        <div className="edit-top-left-item">
                            <img src={mainProduct?.img} alt="" srcset="" />
                            <h2>{mainProduct?.name}</h2>
                        </div>

                        <div className="edit-top-left-item">
                            <h3>ID:</h3>
                            <span>{mainProduct?.id}</span>
                        </div>
                        <div className="edit-top-left-item">
                            <h3>Price:</h3>
                            <span>{mainProduct?.price}</span>
                        </div>
                        <div className="edit-top-left-item">
                            <h3>Active:</h3>
                            <span>{mainProduct?.active}</span>
                        </div>
                        <div className="edit-top-left-item">
                            <h3>In Stock:</h3>
                            <span>{mainProduct?.inStock}</span>
                        </div>
                    </div>

                    <div className="edit-product-top-right">
                        <Chart title={'Product Chart'} data={chartData} dataKey='sale' grid sx={{ height: '200px' }} />
                    </div>
                </div>
            </div>
        </>
    )
}
