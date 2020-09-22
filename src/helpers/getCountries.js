export const getCountries = async () => {

    const url = `https://restcountries.eu/rest/v2/region/americas?fields=name;population;region;capital;flag;nativeName;subRegion;topLevelDomain;currencies;languages;borders`;

    const resp = await fetch( url );

    const { data } = await resp.json();
}