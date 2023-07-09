import React from 'react'
import './TopBar.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Settings } from '@mui/icons-material';


export default function TopBar() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <div className="logo-container">
              <img src="images/logo.svg" alt="" />
            </div>
          </div>
          <div className="topbar-right">
            <div className="topbar-icon-container">
              <NotificationsIcon />
              <span>2</span>
            </div>
            <div className="topbar-icon-container">
              <LanguageIcon />
              <span>2</span>
            </div>
            <div className="topbar-icon-container">
              <SettingsIcon />
            </div>
            <div className="topbar-right-profile">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
