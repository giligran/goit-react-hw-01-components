import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 20px;
`;

export const Container = styled.div`
  width: 300px;
  margin: auto;
`;

export const List = styled.ul`
  display: flex;
  background-color: lightgray;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const Item = styled.li`
  border: 1px solid grey;
  display: flex;
  padding: 5px;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  &: not(: last-child) {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-weight: 500;
`;

export const Percentage = styled.span`
  font-style: italic;
`;
