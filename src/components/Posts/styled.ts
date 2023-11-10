import styled from '@emotion/styled';
import { List as MuiList, ListItem as MuiListItem } from '@mui/material';

export const Container = styled.div`
  display: grid;
  gap: 10px;
  max-width: 500px;
  padding: 32px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
`;


export const List = styled(MuiList)`
  display: grid;
  gap: 4px;
`;

export const ListItem = styled(MuiListItem)`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
`;
