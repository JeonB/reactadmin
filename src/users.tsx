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
  const CustomField = (props: InputProps) => {
    const handleChange = onChange => {
      return onChange('1111');
    };
    const {
      field,
      fieldState: { isTouched, invalid, error },
      formState: { isSubmitted },
      isRequired,
    } = useInput({ source: props.source, onChange: handleChange });
    return (
      <TextField id="name" label="Outlined" variant="outlined" {...field} />
    );
  };
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextField id="name" label="Outlined" variant="outlined" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" />
        <TextInput source="phone" />
        <TextInput source="website" />
        {/* <CustomInput /> */}
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

  const UserDetail = () => (
    <Grid>
      <Typography variant="h3" sx={{ marginTop: -30 }}>
        UserDetail
      </Typography>
      {selectedUser && (
        <Card sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
              {selectedUser.username}
            </Typography>
            <Typography>{selectedUser.name}</Typography>
            <Typography>{selectedUser.email}</Typography>
            <Typography>{selectedUser.address.street}</Typography>
            <Typography>{selectedUser.phone}</Typography>
            <Typography>{selectedUser.website}</Typography>
            <Typography>{selectedUser.company.name}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleCloseDetails}>
              Close
            </Button>
          </CardActions>
        </Card>
      )}
    </Grid>
  );

  const methods = useForm();

  const onSubmit = data => console.log(data);
  function NestedInput() {
    const { register } = useFormContext(); // retrieve all hook methods

    return <input {...register('test')} />;
  }
  return (
    <Stack>
      <SimpleDialogDemo />
      <FormProvider {...methods}>
        // pass all methods into the context
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <NestedInput />
          <input type="submit" />
        </form>
      </FormProvider>

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
