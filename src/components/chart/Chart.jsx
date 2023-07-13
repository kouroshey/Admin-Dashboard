import './Chart.scss'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ title,data, dataKey, grid, containerSize }) {

    return (
        <>
            <div className="chart-container" style={containerSize}>
                <h3>{title}</h3>
                <ResponsiveContainer width="100%" aspect={4}>
                    <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
                        <XAxis dataKey='name' stroke='#5550bd' />
                        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Tooltip />
                        {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5' />}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
