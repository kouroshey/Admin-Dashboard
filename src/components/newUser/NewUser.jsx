import React from 'react'
import './newUser.scss'
import VisibilityIcon from '@mui/icons-material/Visibility';
function NewUser({name, job, profileImg}) {
    return (
        <>
            <div className="new-user-container">
                <img src={profileImg} alt="" />
                <span className="new-user-details">
                    <span className="new-user-name">{name}</span>
                    <span className="new-user-job">{job}</span>
                </span>
                <span className="new-user-btn">
                    <VisibilityIcon />
                    Display
                </span>
            </div>
        </>
    )
}

export default NewUser