import { Stack, Typography } from '@mui/material';
import React from 'react';
import {
  ListContextProvider,
  Datagrid,
  TextField,
  Pagination,
  RecordContextProvider,
  DateField,
  NumberField,
  useInput,
  ListBase,
  List,
  useGetOne,
  useRecordContext,
} from 'react-admin';

export const OrderList = props => {
  const record = useRecordContext(props);
  //   const { data, isLoading } = useGetOne('orders123', { id: record.id }); //api/orders123/id 에서 데이터를 가져옴
  if (!record) return null;
  return (
    <Stack>
      <TextField record={record} source="id" />
      <DateField record={record} source="date" />
      <TextField record={record} source="customer" />
      {record.items.map((item, index) => (
        <React.Fragment key={index}>
          <TextField
            record={record}
            source={`items[${index}].name`}
            label={`Item Name ${index + 1}`}
          />
          <NumberField
            record={record}
            source={`items[${index}].price`}
            label={`Item Price ${index + 1}`}
          />
          <NumberField
            record={record}
            source={`items[${index}].quantity`}
            label={`Quantity ${index + 1}`}
          />
        </React.Fragment>
      ))}
      <Pagination />
    </Stack>
  );
};
