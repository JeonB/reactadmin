import {
  useRecordContext,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
} from 'react-admin';

export const OrderEdit = props => {
  const record = useRecordContext(props);
  console.log('데이터 : ' + JSON.stringify(record));
  if (!record) {
    return null; // Handle the case where the record is not available
  }

  return (
    <Edit>
      <SimpleForm>
        <TextInput source="customer" />
        <DateInput source="date" />
        <ArrayInput source="items">
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
