import React, { useState } from 'react'
import { CountryGrid } from './CountryGrid';
import { Navbar } from './Navbar'
import { SearchCountry } from './SearchCountry';

export const CountryApp = ({ defaultRegion = 'Americas' }) => {
    
    const [region, setRegion] = useState( defaultRegion );
    const [darkMode, setDarkMode] = useState(false)
    
    return (
        <>
            <Navbar />

            <div className={`container ${ darkMode } && dark`}>
                <SearchCountry setRegion = { setRegion } />

                <div className="container-grid">
                    <CountryGrid region={ region }/>
                </div>
            </div>
        </>
    )
}
