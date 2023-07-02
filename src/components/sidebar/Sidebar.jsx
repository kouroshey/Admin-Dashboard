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


export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-container">
                    <p>Dashboard</p>
                    <ul>
                        <li><HomeIcon />Home</li>
                        <li><TimelineIcon />Analytics</li>
                        <li><TrendingUpIcon />Sales</li>
                    </ul>
                    <p>Quick Menu</p>
                    <ul>
                        <li><PersonIcon />Users</li>
                        <li><PersonAddAltIcon />New User</li>
                        <li><StorefrontIcon />Products</li>
                        <li><AttachMoneyIcon />Transactions</li>
                        <li><LeaderboardIcon />Reports</li>
                    </ul>
                    <p>Notifications</p>
                    <ul>
                        <li><MailOutlineIcon />Mail</li>
                        <li><ThumbUpAltIcon />Feedback</li>
                        <li><LocalPostOfficeIcon />Messages</li>
                    </ul>
                    <p>Staff</p>
                    <ul>
                        <li><WorkIcon />Manage</li>
                        <li><TimelineIcon />Analytics</li>
                        <li><ReportIcon />Reports</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

