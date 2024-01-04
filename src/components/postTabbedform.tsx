import { RichTextInput } from 'ra-input-rich-text';
import {
  TabbedForm,
  TextInput,
  required,
  DateInput,
  NumberInput,
  number,
  minValue,
  BooleanInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  DateField,
  EditButton,
} from 'react-admin';

export const PostTabbedForm = () => {
  return (
    <TabbedForm>
      <TabbedForm.Tab label="summary">
        <TextInput disabled label="Id" source="id" />
        <TextInput source="title" validate={required()} />
        {/* <TextInput multiline source="teaser" validate={required()} /> */}
      </TabbedForm.Tab>
      <TabbedForm.Tab label="body">
        <RichTextInput source="body" validate={required()} label={false} />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Miscellaneous">
        <TextInput
          label="Password (if protected post)"
          source="password"
          type="password"
        />
        <DateInput label="Publication date" source="published_at" />
        <NumberInput source="average_note" validate={[number(), minValue(0)]} />
        <BooleanInput
          label="Allow comments?"
          source="commentable"
          defaultValue
        />
        <TextInput disabled label="Nb views" source="views" />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="comments">
        <ReferenceManyField reference="comments" target="post_id" label={false}>
          <Datagrid>
            <TextField source="body" />
            <DateField source="created_at" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </TabbedForm.Tab>
    </TabbedForm>
  );
};
