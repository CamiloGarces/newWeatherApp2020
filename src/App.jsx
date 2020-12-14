import React, { useState, useMemo } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = props => {
    const [allWeather, setAllWeather] = useState({})
    const onSetAllWeather = useMemo(()=>((weatherCity) => {
        setAllWeather(allWeather => {
           return ({ ...allWeather, ...weatherCity })
        })
    }),[setAllWeather])

    return (

        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage></WelcomePage>
                </Route>
                <Route exact path="/main">
                    <MainPage allWeather={allWeather} onSetAllWeather={onSetAllWeather}></MainPage>
                </Route>
                <Route exact path="/city/:countryCode/:city">
                    <CityPage allWeather={allWeather} onSetAllWeather={onSetAllWeather}></CityPage>
                </Route>
                <Route>
                    <NotFoundPage></NotFoundPage>
                </Route>
            </Switch>
        </Router>

    )
}


export default App
