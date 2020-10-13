import React from 'react';
import { useFetchCountries } from '../hooks/useFetchCountries';
import { CountryGridItem } from './CountryGridItem';

export const CountryGrid = ({ region }) => {
    
    const { data: countries, loading } = useFetchCountries( region );
    console.log(loading);
    return (
        <>
            {
                countries.map((country) => (
                    <CountryGridItem 
                        key={ country.name }
                        { ...country }
                    />
                ))
            }
        </>
    )
}
