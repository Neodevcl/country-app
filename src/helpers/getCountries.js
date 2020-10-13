export const getCountries = async ( region ) => {
    
    const url = `https://restcountries.eu/rest/v2/region/${ encodeURI(region) }?fields=name;population;region;capital;flag;nativeName;subRegion;topLevelDomain;currencies;languages;borders`;

    const resp = await fetch(url);
    
    const data = await resp.json();

    const country = data.map( country => {
        return {
            borders: [...country.borders],
            capital: country.capital,
            currencies: [...country.currencies],
            flag: country.flag,
            languages: [...country.languages],
            name: country.name,
            nativeName: country.nativeName,
            population: country.population,
            region: country.region,
            domain: [...country.topLevelDomain],
        }
    });

    return country;
}