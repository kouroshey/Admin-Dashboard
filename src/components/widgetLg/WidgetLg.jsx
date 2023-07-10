import React, { useEffect, useState } from "react";
import './WidgetLg.scss'
import TransAction from "./transAction/TransAction";


export default function WidgetLg() {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/fetch-transactions', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(
                response => response.json()
            )
            .then(
                data => setTransactions(data.transactions)
            )
    }, [])

    return (

        <>
            <div className="widget-lg-container">
                <h3>Latest transactions</h3>
                <table className="transactions-table">
                    <tr className="transaction-tr">
                        {/* <th className="transaction-th">No.</th> */}
                        <th className="transaction-th th-customer">customer</th>
                        <th className="transaction-th">date</th>
                        <th className="transaction-th">amount</th>
                        <th className="transaction-th">status</th>
                    </tr>
                    {
                        transactions.map(transaction => (
                            <TransAction {...transaction} />
                        ))
                    }
                </table>

            </div>







        </>
    )
}