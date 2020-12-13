import { useState, useEffect } from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls'
import getAllWeather from './../utils/transform/getAllWeather'

const useCityList = (cities, city, countryCode) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {

            const url = getWeatherUrl({city, countryCode})

            try {
                const response = await axios.get(url)
                const allWeatherAux = getAllWeather(response, city, countryCode)
                setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))
            } catch (error) {
                if (error.response){
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.resquest){
                    setError("Verifique la conexión a internet")
                } else {
                    setError("Error al cargar los datos")
                }
            }
        }

        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        });

    }, [cities])
    return { allWeather, error, setError }
}

export default useCityList