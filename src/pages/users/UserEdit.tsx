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

const OrderEdit = props => {
  const record = useRecordContext(props);

  if (!record) {
    return null; // Handle the case where the record is not available
  }

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="customer" defaultValue={record.customer} />
        <DateInput source="date" defaultValue={record.date} />
        <ArrayInput source="items" defaultValue={record.items}>
          <SimpleFormIterator inline>
            <TextInput source="name" helperText={false} />
            <NumberInput source="price" helperText={false} />
            <NumberInput source="quantity" helperText={false} />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};
