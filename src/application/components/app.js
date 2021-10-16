import React from 'react'

import { Provider } from 'react-redux'
import store from 'application/redux/create_store'

import { BrowserRouter } from 'react-router-dom'
import Routes from 'application/components/pages/_routes'

import { ThemeProvider } from 'styled-components'
import theme from 'application/styles/theme'

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
}

export default App