import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'
import { WeatherContext } from './WeatherContext'

const App = props => {
 

    return (
        <WeatherContext>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage></WelcomePage>
                    </Route>
                    <Route exact path="/main">
                        <MainPage></MainPage>
                    </Route>
                    <Route exact path="/city/:countryCode/:city">
                        <CityPage></CityPage>
                    </Route>
                    <Route>
                        <NotFoundPage></NotFoundPage>
                    </Route>
                </Switch>
            </Router>
        </WeatherContext>
    )
}


export default App
