import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.scss'
import TopBar from './components/topbar/TopBar'
import Sidebar from './components/sidebar/Sidebar'

export default function App() {
  let router = useRoutes(routes)

  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar/>
        {router}
      </div>
    </>
  )
}
