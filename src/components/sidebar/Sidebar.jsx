import React from 'react'
import './Sidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'; //for feedback
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import WorkIcon from '@mui/icons-material/Work';
import ReportIcon from '@mui/icons-material/Report';

import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-container">
                    <p>Dashboard</p>
                    <ul>
                        <Link to='/' className='link'>
                            <li className='active'><HomeIcon classname='sidebar-icon ' />Home</li>
                        </Link>
                        <li><TimelineIcon classname='sidebar-icon' />Analytics</li>
                        <li><TrendingUpIcon classname='sidebar-icon' />Sales</li>
                    </ul>
                    <p>Quick Menu</p>
                    <ul>
                        <Link to='/users' className='link'>
                            <li><PersonIcon classname='sidebar-icon' />Users</li>
                        </Link>
                        <Link to='/newuser' className='link'>
                            <li><PersonAddAltIcon classname='sidebar-icon' />New User</li>
                        </Link>
                        <Link to='/products' className='link'>
                            <li><StorefrontIcon classname='sidebar-icon' />Products</li>
                        </Link>
                        <li><AttachMoneyIcon classname='sidebar-icon' />Transactions</li>
                        <li><LeaderboardIcon classname='sidebar-icon' />Reports</li>
                    </ul>
                    <p>Notifications</p>
                    <ul>
                        <li><MailOutlineIcon classname='sidebar-icon' />Mail</li>
                        <li><ThumbUpAltIcon classname='sidebar-icon' />Feedback</li>
                        <li><LocalPostOfficeIcon classname='sidebar-icon' />Messages</li>
                    </ul>
                    <p>Staff</p>
                    <ul>
                        <li><WorkIcon classname='sidebar-icon' />Manage</li>
                        <li><TimelineIcon classname='sidebar-icon' />Analytics</li>
                        <li><ReportIcon classname='sidebar-icon' />Reports</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

