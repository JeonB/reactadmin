import { PostList } from './PostList';
import { PostCreate } from './PostCreate';
import { EditGuesser } from 'react-admin';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
export const posts = {
  list: PostList,
  create: PostCreate,
  edit: EditGuesser,
  icon: MovieFilterIcon,
};
