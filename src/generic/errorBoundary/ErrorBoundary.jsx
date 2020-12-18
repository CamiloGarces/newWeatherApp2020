import React, { PureComponent } from 'react'


class ErrorBoundary extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
           hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true}
    }
/*

    ***SE COMENTA PERO ES PARA QUE SE REPASE Y SE APRENDA SOBRE LOS CICLOS EN LOS COMPONENTES TIPO CLASE****
    componentDidMount(){
        console.log("El componente se renderizo")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("El estado previo", prevState.activo)
        console.log("El estado nuevo", this.state.activo)
        console.log("El componente se ha actualizado")
    }

    componentWillUnmount(){
        console.log("El componente se ha des-montado")
    }
*/

    componentDidCatch(error, errorInfo){
        console.log("ErrorInfo", errorInfo)
    }
    render() {
        return (
            this.state.hasError ? 
            (<h1>Hubo un error</h1>) 
            :
            (this.props.children)
        )
    }
}

export default ErrorBoundary