import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

// findByText nos permite encontrar un componente por el texto que muestra
test("WeatherDetails render", async () => {
    const { findByText } = render(<WeatherDetails wind={10} humidity={80}></WeatherDetails>)
    // al utilizar las barras utilizamos un REGEXP, osea una expresion regular
    const wind = await findByText(/10/)
    const humidity = await findByText(/80/)

    expect(wind).toHaveTextContent("Viento: 10 Km/h")
    expect(humidity).toHaveTextContent("Humedad: 80%")
})