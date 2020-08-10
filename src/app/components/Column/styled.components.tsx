import styled from "styled-components";

export const StyledColumn = styled.div`
  background-color: #efefef;
  border: 1px solid #ccc;
  border-radius: 0.5em;
`;

export const ColumnHeader = styled.div`
  display: flex;

  .column-name {
    padding: 0 10px;
  }

  .column-delete {
    visibility: hidden;
  }

  :hover .column-delete {
    visibility: visible;
  }
`;
