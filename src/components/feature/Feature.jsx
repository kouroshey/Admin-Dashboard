import './Feature.scss'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export default function Feature({title, value, percent, iconStyle  }) {
  return (
    <>
      <div className="feature-container">
        <p className='feature-title'>{title}</p>

        <div className="feature-detail">
          <p className='feature-value'>${value}</p>
          <span>{percent} <ArrowUpwardIcon className={iconStyle} /></span>
        </div> 
        
        <p className="feature-subtitle">
          Compared to last month
        </p>
      </div>
    </>
  )
}
