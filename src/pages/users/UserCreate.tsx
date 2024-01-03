import { RichTextInput } from 'ra-input-rich-text';
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  DateInput,
} from 'react-admin';

export const UserCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="username" validate={[required()]} fullWidth />
        <TextInput source="id" />
        <TextInput source="address.street" />
        <TextInput source="phone" />
        <TextInput source="website" />
        <TextInput source="company.name" />
      </SimpleForm>
    </Create>
  );
};
