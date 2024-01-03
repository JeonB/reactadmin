import {
  useRecordContext,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
  useCreate,
  SaveButton,
  Toolbar,
  useNotify,
  useRedirect,
} from 'react-admin';

export const OrderEdit = props => {
  const record = useRecordContext(props);
  console.log('데이터 : ' + JSON.stringify(record));
  if (!record) {
    return null; // Handle the case where the record is not available
  }
  const [create] = useCreate();
  const orderSave = data => {
    create('orders', { data }); // api/orders로 데이터 전송
  };

  const PostCreateToolbar = () => {
    const redirect = useRedirect();
    const notify = useNotify();
    return (
      <Toolbar>
        <SaveButton label="post.action.save_and_show" />
        <SaveButton
          label="post.action.save_and_add"
          mutationOptions={{
            onSuccess: data => {
              notify('ra.notification.created', {
                type: 'info',
                messageArgs: { smart_count: 1 },
              });
              redirect(false);
            },
          }}
          type="button"
          variant="text"
        />
      </Toolbar>
    );
  };
  return (
    // <Edit {...props}>
    // SimpleForm은 기본적으로 save콜백함수를 호출하지만, onSubmit을 사용하여 덮어쓰기가 가능.
    <SimpleForm onSubmit={orderSave} toolbar={<PostCreateToolbar />}>
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
    // </Edit>
  );
};
