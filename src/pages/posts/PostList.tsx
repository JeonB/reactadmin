import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Box,
} from '@mui/material';
import { useState, SetStateAction } from 'react';
import {
  useListController,
  Button,
  ListContextProvider,
  Datagrid,
  TextField,
  Pagination,
  useRedirect,
  FilterButton,
  List,
  TextInput,
  ReferenceInput,
} from 'react-admin';
import { BoundedTextField } from '../../components/LatLongInput';
import { PostCreate } from './PostCreate';
import { CreateButton, ExportButton, TopToolbar } from 'react-admin';

const PostListActions = () => (
  <TopToolbar>
    {/* <FilterButton filters={default} /> */}
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);
export const PostList = () => {
  const listContext = useListController();
  const useInput = (initialValue: any, validator: undefined) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event: { target: { value: any } }) => {
      const {
        target: { value },
      } = event;
      let willUpdate = true;
      if (typeof validator === 'function') {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };
  const redirect = useRedirect();

  const handleClick = () => {
    redirect('/posts/create');
  };
  const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
  ];

  const Aside = () => (
    <Box sx={{ width: '200px', margin: '1em' }}>
      <Typography variant="h6">Instructions</Typography>
      <Typography variant="body2">
        Posts will only be published once an editor approves them
      </Typography>
    </Box>
  );
  return (
    <Stack>
      {/* <Button
        variant="contained"
        label="Create"
        color="secondary"
        onClick={handleClick}/> */}
      {/* <ListContextProvider value={listContext}> */}
      <List
        actions={<PostListActions />}
        filters={postFilters}
        aside={<Aside />}>
        <Datagrid rowClick="show">
          <TextField source="userId" />
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="body" />
          {/* <BoundedTextField source="text" /> */}
        </Datagrid>
      </List>
      {/* </ListContextProvider> */}
    </Stack>
  );
};
