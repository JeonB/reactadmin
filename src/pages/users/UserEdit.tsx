import {
  ArrayInput,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useRecordContext,
} from 'react-admin';
import { CustomInput } from '../../components';

export const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="username" label="유저이름" />
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
