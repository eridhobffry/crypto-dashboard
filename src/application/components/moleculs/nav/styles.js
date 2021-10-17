import styled from "styled-components";

export const NavContainer = styled.div`
    display: flex;
    flex: 1 0 10%;
    padding: 20px;
    border-radius: 20px;
    min-height: 5vh;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: ${p => p.theme.color.darkslate};
    box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px, rgb(88 102 126 / 12%) 0px 1px 2px;
`

export const NavWrapper = styled.div`
    display: flex;
    flex: 1 1;
    gap: 5%;
    align-items: center;
    flex-wrap: ${p => p.noWrap ? 'nowrap' : 'wrap'};
`