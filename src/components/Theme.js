const lightTheme = {
    body: '#FAFAFA',
    text: '#111517',
}
const darkTheme = {
    body: '#202c37',
    text: '#FAFAFA',
}

const theme = mode => ( mode === 'dark' ? darkTheme : lightTheme );

export default theme;