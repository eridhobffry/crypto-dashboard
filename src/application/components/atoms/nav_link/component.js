import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavLink = styled(NavLink)`
    font-size: ${p => p.theme.fontSize.medium18};
    font-weight: ${p => p.theme.fontWeight.semiBold};
    text-decoration: none;
    color: ${p => p.theme.color.text};

    &:hover {
    color: ${p => p.theme.color.blue};
    }
`

const NavLinkStyledComponent = ({textContent, linkTo}) => {
    return <StyledNavLink to={linkTo}>{textContent}</StyledNavLink>
}

export default NavLinkStyledComponent
