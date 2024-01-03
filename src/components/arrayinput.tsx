import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ArrayInput,
  NumberInput,
  SimpleFormIterator,
  Datagrid,
  DateField,
  List,
  NumberField,
  TextField,
  useRecordContext,
} from 'react-admin';

const order = {
  id: 1,
  date: '2022-08-30',
  customer: 'John Doe',
  items: [
    {
      name: 'Office Jeans',
      price: 45.99,
      quantity: 1,
    },
    {
      name: 'Black Elegance Jeans',
      price: 69.99,
      quantity: 2,
    },
    {
      name: 'Slim Fit Jeans',
      price: 55.99,
      quantity: 1,
    },
  ],
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
