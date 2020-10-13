import React from 'react'

export const CountryGridItem = ({ capital, flag, name, population, region }) => {
    return (
        <div className="card">
            <img src={ flag } alt=""/>

            <div className="card-text">
                <p className="titulo">{ name }</p>
                <p><span className="subs">Population:</span> { population }</p>
                <p><span className="subs">Region:</span> { region }</p>
                <p><span className="subs">Capital:</span> { capital }</p>
            </div>
        </div>
    )
}
