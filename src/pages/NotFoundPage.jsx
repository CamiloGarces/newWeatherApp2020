import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiRain } from 'react-icons/wi'

const NotFoundPage = () => {
    return (
    <Grid 
            container 
            direction="column" 
            justify="center" 
            className="full">
                <div className="hightlight">
                    <Grid item container xs={12}
                        justify="center"
                        alignItems="center">
                            <Grid item>
                                <IconContext.Provider value={{ size: "6em" }}>
                                    <WiRain></WiRain>
                                </IconContext.Provider>
                            </Grid>
                            <Grid item
                                container
                                direction="column"
                                justify="center"
                                alignItems="center">
                                    <Typography variant="h4" color="inherit">
                                        404 | La página no existe
                                    </Typography>
                                    <Link color="inherit" 
                                        arial-label="menu" 
                                        component={RouterLink} 
                                        to="/main">
                                            Volver al inicio
                                    </Link>
                            </Grid>
                    </Grid>
                </div>  
        </Grid>
    )
}


export default NotFoundPage

