import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1 style={{color: '#9d0f0f', fontWeight: '750', textAlign:'center',textDecoration:'underline'}}>Employee Management Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button' style={{marginLeft: '41%'}}>Add New Employee</button>
            </div>
        </header>
    )
}

export default Header