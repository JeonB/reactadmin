// eslint-disable-next-line react/jsx-key
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Datagrid,
  List,
  SearchInput,
  TextField,
  TextInput,
  useInput,
} from 'react-admin';

export const CustomInput = props => {
  const { source, parse, label, ...rest } = props;
  const { field } = useInput({
    source,
    ...rest,
    parse,
  });

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [roleName, setRoleName] = React.useState('dd');

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const selectRow = (id, resource, record) => {
    field.onChange(record.id);
    setRoleName(record.name);
    console.log(record.name);
    setDialogOpen(false);
  };

  const buttonLabel = () => {
    let labelText = roleName;
    console.log(labelText);

    return labelText;
  };

  return (
    <>
      <TextInput label="customInput" source={source} />
      <Stack sx={{ width: '100%', alignItems: 'flex-start' }}>
        {buttonLabel()}
      </Stack>
      <Button label="OPEN" onClick={handleButtonClick} />
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
