import React from 'react';
import { useFetchCountries } from '../hooks/useFetchCountries';

export const CountryGrid = () => {

    const { data: countries, loading } = useFetchCountries();


    return (
        <>
            <div className="card-grid">
                sa
            </div>   
        </>
    )
}
