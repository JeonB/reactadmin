import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Stack,
} from '@mui/material';
import { SetStateAction, useState } from 'react';
import {
  useListController,
  Button,
  ListContextProvider,
  Datagrid,
  TextField,
} from 'react-admin';
import SimpleDialogDemo from './userform';
import { UseInputs } from './useInput';

export const UserList = () => {
  const listContext = useListController();
  const [selectedUser, setSelectedUser] = useState(null);
  const useInput = (initialValue: any, validator: undefined) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event: { target: { value: any } }) => {
      const {
        target: { value },
      } = event;
      let willUpdate = true;
      if (typeof validator === 'function') {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };
  const sugar = value => value.length < 10; //입력창에 10글자만 입력 가능
  const name = useInput('ㅗ|', sugar);
  const handleViewDetails = (user: SetStateAction<null>) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  const UserListItem = ({ data }) => (
    <Grid item key={data.id} xs={12} sm={6} md={4} mt={3} mr={5}>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            {data.username}
          </Typography>
          <Typography>{data.name}</Typography>
          <Typography>{data.email}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleViewDetails(data)}>
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );

  return (
    <Stack>
      <SimpleDialogDemo />
      <ListContextProvider value={listContext}>
        <Datagrid rowClick="edit">
          <TextField source="username" />
          <TextField source="id" />
          <TextField source="email" />
          <TextField source="address.street" />
          <TextField source="phone" />
          <TextField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      </ListContextProvider>

      <h2>해위</h2>
      <input placeholder="Name" {...name} />
      {/* 
        {/* 
        <ListContextProvider value={listContext}>
          <Typography variant="h3" sx={{ marginTop: 3 }}>
            UserList
          </Typography>
          <Grid container spacing={3} marginBottom={3}>
            {listContext.data &&
              listContext.data.map(data => (
                <UserListItem key={data.id} data={data} />
              ))}
            <UserDetail />
            <Pagination
              rowsPerPageOptions={[1, 4, 10]}
              sx={{ marginLeft: 30, marginTop: 3 }}
            />
          </Grid>
        </ListContextProvider> */}
    </Stack>
  );
};
