import styled from '@emotion/styled';
import { GrStatusGoodSmall } from 'react-icons/gr';

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 16px 32px;
`;
export const List = styled.ul``;

export const ListElement = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StatusIcon = styled(GrStatusGoodSmall)`
  color: ${props => (props['data-status'] ? 'red' : 'green')};
`;

export const Wrap = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${props => (props.status ? 'red' : 'green')};
`;
