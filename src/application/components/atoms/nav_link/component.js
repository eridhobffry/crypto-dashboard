import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavLink = styled(NavLink)`
    font-size: ${p => p.theme.fontSize.medium};
    font-weight: ${p => p.theme.fontWeight.semiBold};
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${p => p.theme.color.text};
    ${p => p.selected ? `
        color: ${p.theme.color.blue};
    ` : ``}

    &:hover {
    color: ${p => p.theme.color.blue};
    }
`

const NavLinkStyledComponent = ({ textContent, linkTo, selected }) => {
    return <StyledNavLink selected={selected} to={linkTo}>{textContent}</StyledNavLink>
}

export default NavLinkStyledComponent
