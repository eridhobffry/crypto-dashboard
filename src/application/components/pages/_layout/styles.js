import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100vw;
    height: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: ${p => p.theme.color.main};
    color: ${p => p.theme.color.text};
`