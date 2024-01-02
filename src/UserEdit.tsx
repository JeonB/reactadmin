import { Edit, SimpleForm, TextInput } from 'react-admin';
import { CustomInput } from './custinput';

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
