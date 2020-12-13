import { useRef, useEffect, useState } from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () => {
    const myRefDiv = useRef(null)
    const [ vanta, setVanta ] = useState(0)
    useEffect(() => {
        console.log(useEffect.current,'useEffect')

        if(!vanta){
            //activo el efecto "clouds"
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            }))
        }
        // al salir de la pantalla debemos detener el efecto
        // y desasociar todos lo recursos (div + vanta effect)
        return () => {
            // dentro de esta funcion se va a realizar la tarea
            // de destruir los recursos tomados por "vanta"
            if(vanta){
                vanta.destroy()
            }
        }
        
    }, [vanta]) // con esto me aseguro de que funcione correctamente
    // si tuviera mas variables "use"
    return myRefDiv
}

export default useVanta