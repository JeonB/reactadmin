import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserEdit, UserList } from './users';
import { CustomInput } from './custinput';

//name
export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} />
  </Admin>
);
