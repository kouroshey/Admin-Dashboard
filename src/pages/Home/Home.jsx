import React, { useState, useEffect } from 'react'
import './Home.scss'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'


export default function Home() {
    const [featureValues, setFeatureValues] = useState([
        { id: 1, title: 'Revanue', iconStyle: 'arrow-down', value: "2,415", percent: -11.4 },
        { id: 2, title: 'Sales', iconStyle: 'arrow-down', value: "4,550", percent: -1.4 },
        { id: 3, title: 'Cost', iconStyle: 'arrow-up', value: "2,135", percent: +2.8 },
    ])

    const [xAxisData, setXAxisData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/fetch-xAxisData', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(response => response.json())
            .then(data => setXAxisData(data.xAxisData))
        }, [])

    return (
        <>
            <div className="home-container">

                <div className="features-wrapper">
                    {featureValues.map(item => (
                        <Feature {...item}></Feature>
                    ))}
                </div>

                <div className="chart-wrapper">
                    <Chart title='Month Sale' dataKey='sale' data={xAxisData} grid></Chart>
                </div>

                <div className="widgets-wrapper">
                    <WidgetSm />
                    <WidgetLg/>
                </div>
            </div>
        </>
    )
}
