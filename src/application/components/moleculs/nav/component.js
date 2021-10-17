import { Logo, NavLinkStyled } from 'application/components/atoms'
import { ROUTES } from 'application/constants'
import React from 'react'
import { withRouter } from 'react-router'
import { NavContainer, NavWrapper } from './styles'

const NavComponent = ({ children, match }) => {
    return <NavContainer>
        <NavWrapper noWrap>
            <Logo />
            <NavLinkStyled selected={match.path === ROUTES.OVERVIEW} linkTo={ROUTES.OVERVIEW} textContent='Overview' />
            <NavLinkStyled selected={match.path === ROUTES.LIQUIDITY} linkTo={ROUTES.LIQUIDITY} textContent='Liquidity Statistics' />
        </NavWrapper>
        <NavWrapper>
            {children}
        </NavWrapper>
    </NavContainer>
}

export default withRouter(NavComponent)
