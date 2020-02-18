import React from 'react'

const Layout = ({title='Title',describtion='Describtion',className,children}) => {
    return (
        <div>
            <div className='jumbotron'>
                     <h2>{title}</h2>
                     <p className='lead'>{describtion}</p>
            </div>
             <div className={className}>
                      {children}
             </div>
        </div>
    )
}

export default Layout
