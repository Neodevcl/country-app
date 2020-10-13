import React, { useState } from 'react'

export const SearchCountry = ({ setRegion }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSelectChange = (e) => {
        setRegion( e.target.value );
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
            <select className="select" onChange={ handleSelectChange }>
                <option value="0" disabled selected>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    )
}
