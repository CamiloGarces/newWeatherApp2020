import React from 'react'
import ErrorBoundary from './ErrorBoundary'

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary
}

const ComponentWithOutError = () => {
    <h1>Sin error</h1>
}

const prop = undefined

const ComponentWitError = () => {
    <h1>{prop.hola}</h1>
}

export const ErrorBoundaryWithError = () => (
    <ErrorBoundary>
        <ComponentWitError></ComponentWitError>
    </ErrorBoundary>
)

export const ErrorBoundaryWithOutError = () => (
    <ErrorBoundary>
        <ComponentWithOutError></ComponentWithOutError>
    </ErrorBoundary>
)
