import React from 'react'
import PropTypes from 'prop-types'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import useCityList from './../../hooks/useCityList'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
import { getCityCode } from './../../utils/utils'
import { useWeatherDispatchContext, useWeatherStateContext } from '../../WeatherContext'



const CityListItem = React.memo(function CityListItem({ city, countryCode, country, eventOnClickCity, weather }) {
    return (
        <ListItem 
            button
            onClick={() => eventOnClickCity(city, countryCode)}>
            <Grid container 
                justiry="center" 
                alignItems="center" >
                <Grid item
                    md={9}
                    xs={12}>
                    <CityInfo city={city} country={country}></CityInfo>
                </Grid>
                <Grid item
                    md={3}
                    xs={12}>
                    <Weather 
                        temperature={weather && weather.temperature} 
                        state={weather && weather.state} /> 
                    </Grid>
            </Grid>
        </ListItem>
    )
})

const renderCityAndCountry = eventOnClickCity => (cityAndcountry, weather) => {
    const { city, countryCode } = cityAndcountry
    return <CityListItem 
                key={getCityCode(city, countryCode)} 
                eventOnClickCity={eventOnClickCity} 
                weather={weather} 
                {...cityAndcountry}/>
}


const CityList = ({ cities, onClickCity}) => {

    const actions = useWeatherDispatchContext()
    const data = useWeatherStateContext()

    const { allWeather } = data
    const { error, setError } = useCityList(cities, allWeather, actions)
    return (
        <div>
            <List>
                {
                    error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
                }
                {
                    cities.map(cityAndcountry => renderCityAndCountry(onClickCity)(cityAndcountry, 
                            allWeather[getCityCode(cityAndcountry.city, cityAndcountry.countryCode)]))
                }
            </List>
        </div>
    )
}
// como podemos mejorar esta validacion 
CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default React.memo(CityList)
