import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
    background-image: ${p => `url(${p.imageSource})`};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    width: 200px;
    height: 35px;
`

const LogoComponent = ({ logoSource = 'https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg?_=1a01743' }) => {
    return <StyledLogo imageSource={logoSource}/>
}

export default LogoComponent
