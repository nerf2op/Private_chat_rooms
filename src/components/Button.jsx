import React from 'react'

export const Button = () => {
    const refreshPage = () =>{
        localStorage.clear();
        window.location.reload(false);
    }
    return (
        <div>
            <button onClick={refreshPage} className="btn" style={{display: 'flex', position : 'relative'}}>Log Out</button>
        </div>
    )
}
