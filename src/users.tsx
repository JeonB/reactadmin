import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import {
  Datagrid,
  Edit,
  InputProps,
  List,
  ListContext,
  ListContextProvider,
  Pagination,
  SimpleForm,
  TextInput,
  TextField,
  useInput,
  useListController,
  Form,
} from 'react-admin';
import SimpleDialogDemo from './userform';
import { CustomInput } from './custinput';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

export const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" />
        <TextInput source="phone" />
        <TextInput source="website" />
        <TextInput source="company.name" />
        <CustomInput source="username" />
      </SimpleForm>
    </Edit>
  );
};
export const UserList = () => {
  const listContext = useListController();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewDetails = user => {
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
      {/* <SimpleDialogDemo /> */}
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
