import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1032px;
  padding: 16px;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 1000px;
  text-align: center;

  thead {
    th {
      background-color: grey;
    }
  }

  tbody {
    tr:nth-of-type(even) {
      background-color: #f2f2f2;
    }

    tr:nth-of-type(odd) {
      background-color: #ffffff;
    }
  }
`;
