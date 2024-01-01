// eslint-disable-next-line react/jsx-key
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Datagrid,
  List,
  TextField,
  TextInput,
  useInput,
} from 'react-admin';

export const CustomInput = props => {
  const { source, parse, ...rest } = props;

  const { field } = useInput({
    source,
    ...rest,
    parse,
  });

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const selectRow = (id, resource, record) => {
    field.onChange(record.name);
    setDialogOpen(false);
  };

  return (
    <>
      <TextInput label="customInput" source={source} />
      <Button label="다이얼로그 열기" onClick={handleButtonClick} />
      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="md">
        <DialogTitle>검색</DialogTitle>
        <DialogContent>
          <List resource="users" actions={false}>
            <Datagrid bulkActionButtons={false} rowClick={selectRow}>
              <TextField source="id" />
              <TextField source="name" />
            </Datagrid>
          </List>
        </DialogContent>
        <DialogActions>
          <Button label="닫기" onClick={handleDialogClose} />
        </DialogActions>
      </Dialog>
    </>
  );
};
