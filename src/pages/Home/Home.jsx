import React, { useState } from 'react'
import './Home.scss'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import { xAxisData } from '../../datas'
import WidgetSm from '../../components/widgetSm/WidgetSm'


export default function Home() {
    const [featureValues, setFeatureValues] = useState([
        { id: 1, title: 'Revanue', iconStyle: 'arrow-down', value: "2,415", percent: -11.4 },
        { id: 2, title: 'Sales', iconStyle: 'arrow-down', value: "4,550", percent: -1.4 },
        { id: 3, title: 'Cost', iconStyle: 'arrow-up', value: "2,135", percent: +2.8 },
    ])

    return (
        <>
            <div className="home-container">

                <div className="features-wrapper">
                    {featureValues.map(item => (
                        <Feature {...item}></Feature>
                    ))}
                </div>

                <div className="chart-wrapper">
                    <Chart title='Month Sale' data={xAxisData} dataKey='sale' grid></Chart>
                </div>

                <div className="widgets-wrapper">
                        <WidgetSm/>
                </div>
            </div>
        </>
    )
}
