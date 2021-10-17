import styled from "styled-components"

export const StyledPureSelect = styled.div`
      width: ${props => props.cssWidth};
      flex: ${props => props.cssFlexBasis === 'auto' ? '1' : '0'} 0 ${props => props.cssFlexBasis};

      & div.css-1wa3eu0-placeholder { 
        color: ${props => props.theme.color.text10};
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${props => props.theme.color.text10}
      }
      
      ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${props => props.theme.color.text10}
      }

      /* // select icon customisation */

      & i.material-icons {
        font-size: ${props => props.theme.fontSize.standart};
      }

      &  span.css-1okebmr-indicatorSeparator {
          margin-top: 2px;
          height: 20px;
      }

      & div.css-1hb7zxy-IndicatorsContainer,
       div.css-tlfecz-indicatorContainer {
          height: 35px;
          padding: 4px;
      }

      & div.css-1oai5dw-control {
          border-color: ${props => props.theme.color.text10};
          height: auto;
          align-content:center;
      }
      & div.css-ypr86o-control,
      & div.css-zbnekv-control{
        align-content:center;
        }
      & * {
        border-radius: 0px !important;
      }

      & div.css-26l3qy-menu{
          margin-top:-1px;
          left: 1px;
          width: calc(100% - 2px);
      }
`

export const StyledSelectInputWithLabel = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    height: ${props => props.cssHeight !== undefined ? props.cssHeight : 'auto'};
    &>div{
        height: ${props => props.cssHeight !== undefined ? props.cssHeight : 'auto'};
    }
    margin-bottom: ${props => props.cssMarginBottom !== undefined ? props.cssMarginBottom : '0'};
    font-size: ${props => props.theme.fontSize.standard};
    color: ${props => props.theme.color.anthracite};

    & label.label {
        margin-bottom: 4px;
        font-size: ${props => props.theme.fontSize.small};
    }
`