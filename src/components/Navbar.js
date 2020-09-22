import React from 'react'

export const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="nav">
                    <p className="titulo">Where in the world?</p>
                    <button type="button"><p className="subtitulo"><ion-icon name="moon-outline"></ion-icon> <span>Dark Mode</span></p></button>
                </div>
            </header>   
        </>
    )
}
