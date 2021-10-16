import React from 'react'
import { Fragment } from 'react'
import { GlobalStyle } from './global_style'
import { MainWrapper } from './styles'

const BaseLayout = ({children}) => {
    return <Fragment>
        <GlobalStyle />
        <MainWrapper>
            {children}
        </MainWrapper>
    </Fragment>
}

export default BaseLayout
