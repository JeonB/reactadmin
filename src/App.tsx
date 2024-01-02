import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserList } from './UserList';
import { UserEdit } from './UserEdit';
import { PostCreate } from './PostCreate';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} />
    <Resource name="posts" create={PostCreate} />
  </Admin>
);
