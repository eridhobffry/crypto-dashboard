import React from 'react'
import Select from 'react-select'
import { StyledPureSelect } from './styles'

export const PureSelect = (props) => {
    const {cssWidth = 'auto', cssFlexBasis = 'auto', ...rest} = props
    
    return <StyledPureSelect cssWidth={cssWidth} cssFlexBasis={cssFlexBasis}>
        <Select {...rest} />
    </StyledPureSelect>
}