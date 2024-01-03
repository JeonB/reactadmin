import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Pagination,
} from '@mui/material';
import { SetStateAction, useState } from 'react';
import {
  useListController,
  Button,
  ListContextProvider,
  Datagrid,
  TextField,
  List,
  ArrayInput,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  DateField,
  NumberField,
  useRecordContext,
  RecordContextProvider,
} from 'react-admin';
import SimpleDialogDemo from '../../components/userform';

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
  const name = useInput('10자이하만가능', sugar);

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
        <Pagination />
      </ListContextProvider>

      {/* <RecordContextProvider value={order}>
        <OrderEdit />
      </RecordContextProvider> */}
    </Stack>
  );
};
