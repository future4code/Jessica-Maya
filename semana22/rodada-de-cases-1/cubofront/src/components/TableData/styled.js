import styled from "styled-components";

export const ContainerTableData = styled.table`
    margin-left: 2rem;
    border-collapse: collapse;
    th, tr, td {
        border: solid 1px rgb(120, 120, 120);
    }
    td {
        color: rgb(120, 110, 110);
    }
    th {
        color: rgb(100, 100, 100);
    }
    .row-id {
        padding: 0.5rem 0.5rem;
    }

    .row-name {
        width: 150px;
        text-align: start;
        padding: 0.5rem 0.5rem
    }
   
    .row-participation {
        padding:  0.5rem 0.4rem ;
        text-align: center;
    }
`