import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserEdit, UserList } from './users';

//name
export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} />
  </Admin>
);
