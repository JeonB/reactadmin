import { PostList } from './PostList';
import { PostCreate } from './PostCreate';
import { EditGuesser } from 'react-admin';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { PostShow } from './PostShow';
import { PostEdit } from './PostEdit';
export const posts = {
  show: PostShow,
  list: PostList,
  create: PostCreate,
  edit: PostEdit,
  icon: MovieFilterIcon,
};
