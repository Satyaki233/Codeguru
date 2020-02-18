import React from 'react'

const AdStatus = () => {
    const user = localStorage.getItem('info-name')
    const email = localStorage.getItem('info-email')
    return (
        <div className='container my-2 text-white bg-dark'>
            <h1>
              Admin: {user}
            </h1>
            <h2>
             email:   {email}
            </h2>
            <div>
                <strong>
                    Use Navigation links to see the users and courses
                </strong>
            </div>
        </div>
    )
}

export default AdStatus
