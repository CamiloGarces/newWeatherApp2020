
const appid = '12965ebd8a03069ed8c8a7f40535da7d'

export const getWeatherUrl = ({ city, countryCode }) => (
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
)


export const getForecastUrl = ({ city, countryCode }) => (
    `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
)