import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100vw;
    height: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow: auto;
    background-color: ${p => p.theme.color.main};
    color: ${p => p.theme.color.text};
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${p => p.theme.color.main};
    color: ${p => p.theme.color.text};
    flex: 1 1 90%;
    padding: 30px 0px;
`
export const MainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${p => p.theme.color.main};
    color: ${p => p.theme.color.text};
    flex: 1 1 100%;
    padding: 10px 0px;
`
export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${p => p.theme.color.main};
    color: ${p => p.theme.color.text};
    flex: 0 1 10%;
    padding: 10px 0px;
`