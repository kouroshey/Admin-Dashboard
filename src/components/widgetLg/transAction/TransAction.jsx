import React from 'react'
import './TransAction.scss'
import Button from '@mui/material/Button';

export default function TransAction({ id, img, name, date, amount, status }) {
    return (
        <>
            <tr className='transaction-tr'>
                {/* <td className='transaction-td'>{id}</td> */}
                <td className='transaction-td user-details'><img src={img} alt="" />{name}</td>
                <td className='transaction-td'>{date}</td>
                <td className='transaction-td'>{amount}</td>
                <td className='transaction-td transaction-btn'>
                    <Button
                        variant='outlined' color={status === 'Approved' ? 'success' : status === 'Decline' ? 'error' : 'primary'}
                    sx={{borderRadius: '8px'}}>
                        {status}
                    </Button>
                </td>
            </tr>
        </>
    )
}
