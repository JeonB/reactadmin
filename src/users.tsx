import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import {
  Datagrid,
  ListContextProvider,
  Pagination,
  RecordContextProvider,
  TextField,
  useListController,
  useRecordContext,
  useResourceContext,
  useShowController,
} from 'react-admin';

export const UserList = () => {
  const resource = useResourceContext();
  const listContext = useListController();
  const showContext = useShowController({ id: 1 });
  const [userId, setUserId] = useState(2);
  const getId = (id, resource, record) => {
    setUserId(id);
  };
  const RecordView = () => {
    const record = useRecordContext();
    return (
      <Stack>
        <Typography>{record.name}</Typography>
        <Typography>{record.username}</Typography>
      </Stack>
    );
  };
  return (
    <Stack>
      <ListContextProvider value={listContext}>
        <Datagrid rowClick={getId}>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          {/* <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" /> */}
        </Datagrid>

        <Pagination />
      </ListContextProvider>
      <Typography variant="h3">User Detail</Typography>
      <RecordContextProvider
        value={{
          name: 5,
          username: 'bababapldkfjals',
        }}>
        <RecordView />
      </RecordContextProvider>
    </Stack>
  );
};
