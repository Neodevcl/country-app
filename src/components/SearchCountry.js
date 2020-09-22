import React, { useState } from 'react'

export const SearchCountry = () => {

    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }


    return (
        <form className="formulario">
            <div className="buscador">
                <ion-icon name="search-outline"></ion-icon>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                    placeholder = "Search for a country..."
                /> 
            </div>
        </form>
    )
}
