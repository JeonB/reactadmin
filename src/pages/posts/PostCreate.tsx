import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  required,
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import uuid from 'uuid';

export const PostCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} fullWidth />
        <TextInput source="teaser" multiline={true} label="Short description" />
        <RichTextInput source="body" />
        <DateInput
          label="Publication date"
          source="published_at"
          defaultValue={new Date()}
        />
      </SimpleForm>
    </Create>
  );
};
