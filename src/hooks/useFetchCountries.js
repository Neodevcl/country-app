import { useState, useEffect } from 'react';
import { getCountries } from '../helpers/getCountries';

export const useFetchCountries = ( region ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getCountries( region ).then(
            countries => {
                setState({
                    data: countries,
                    loading: false,
                })
            }
        );
    }, [region])
    console.log('Cambiooooo');

    return state;
}