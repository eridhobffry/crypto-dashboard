import styled from "styled-components";

export const StyledTableWrapper = styled.div`
  > div {
    width: 100%;
    height: ${p => p.tableHeight};
    overflow: auto;
  }
  table {
    width: 100%;
    border-spacing: 0;

    thead > tr {
      position: sticky;
      left: 0;
      top: 0;
      z-index: 50;
      height: auto;
      display: block;
      th:first-child {
        text-align: center;
      }
    }

    tbody {
      display: block;
    }

    tr {
      height: 4rem;
      cursor: pointer;
      th:first-child {
        text-align: right;
        font-weight: normal;
        position: sticky;
        left: 0px;
        z-index: 40;
    background-color:  ${p => p.theme.color.main};
        width: 10%;
      }
      td:first-child {
    font-weight: normal;
    position: sticky;
    left: 0px;
    z-index: 40;
    background-color:  ${p => p.theme.color.main};
        text-align: center;
        width: 10%;
      }
      &:hover {
        background-color: ${p => p.theme.color.blueDark};
      }
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      width: 21%;
      font-size: 13px;
      margin: 0;
      padding: 0.5rem;
      text-align: left;
      border-bottom: 1px solid ${p => p.theme.color.darkslatelight};
    }
    th {
      font-size: 1rem;
      cursor: default;
      :not(:first-child) {
        text-align: left;
        font-size: 1rem;
        font-weight: ${p => p.theme.fontWeight.bold};
      }
    }
  }
`;