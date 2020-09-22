import React from 'react'
import { CountryGrid } from './CountryGrid';
import { Navbar } from './Navbar'
import { SearchCountry } from './SearchCountry';

export const CountryApp = () => {
    
    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    return (
        <>
            <Navbar />

            <div className="container">
                <SearchCountry />

                <div className="container">
                    <CountryGrid />
                </div>
            </div>


            <ul>
                {
                    regions.map( region => 
                        <li>{ region }</li>
                    )
                }
            </ul>

        </>
    )
}
