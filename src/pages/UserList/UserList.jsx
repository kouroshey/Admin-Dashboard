import React, { useState, useEffect } from 'react'
import './UserList.scss'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function UserList() {

  //get data from server
  const [userDatas, setUserDatas] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/fetch-user-list', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(data => setUserDatas(data.users))

  }, [])
  //methods

  //userDeleteHandler

  const userDeleteHandler = userID => {
    
    setUserDatas(userDatas.filter(user => user.id !== userID))
  }
  

  //set Data Grid settings
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: '100'
    },
    {
      field: 'user',
      headerName: 'User',
      width: '300',
      renderCell: (params) => (
        <>
          <Link to='/' className='link userList-user-details' >
            <img src={params.row.avatar} alt="" className='userList-user-avatar ' />
            <p>{params.row.userName}</p>
          </Link>
        </>
      )

    },
    {
      field: 'email',
      headerName: 'Email',
      width: '200'
    },
    {
      field: 'status',
      headerName: 'Status',
      width: '150'
    },
    {
      field: 'transaction',
      headerName: 'Transactions',
      width: '200'
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: '200',
      renderCell: (params) => {
        return (
          <>
            <div className="userList-actions-container">
              <Link className='link userList-actions-linkElem' >
                Edit
              </Link>
                <EditIcon fontSize='medium'/>
              <Link className='link userList-actions-linkElem' >
                Delete <DeleteIcon fontSize='medium' color='error'  onClick={() => userDeleteHandler(params.row.id)} />
              </Link>
            </div>
          </>
        )
      }
    },
  ]

  return (
    <>
      <div className="data-grid-container">
        <DataGrid
          columns={columns}
          rows={userDatas}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 11,
              },
            },
          }}
          pageSizeOptions={[3]}

        >

        </DataGrid>
      </div>
    </>
  )
}
