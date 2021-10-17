import styled from "styled-components";

export const PaginationContainer = styled.ul`
    display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: center;
`

export const PaginationItem = styled.li`
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: ${p => p.theme.color.text};
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
      background-color: ${p => p.selected ? p.theme.color.darkslatelight : ''} ;

    &.dots:hover {
      background-color: transparent;
      cursor: default;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }
`

export const Arrow = styled.div`
    &::before {
        position: relative;
        /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
        content: '';
        /* By using an em scale, the arrows will size with the font */
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid ${p => p.theme.color.text};;
        border-top: 0.12em solid ${p => p.theme.color.text};;
      }
      transform: ${p => p.left ? 'rotate(-135deg) translate(-50%)' : 'rotate(45deg)'} ;
`