import { Admin, CustomRoutes, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import { posts } from './pages/posts';
import { users } from './pages/users';
import { orders } from './pages/orders';
import { Route } from 'react-router-dom';
import { OrderList } from './pages/orders/OrderList';
import { OrderEdit } from './pages/orders/OrderEdit';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" {...users} />
    <Resource name="posts" {...posts} />
    <CustomRoutes>
      <Route
        path="/orders/:id"
        element={
          <OrderEdit
            record={{
              id: 1,
              date: '2022-08-30',
              customer: 'John Doe',
              items: [
                {
                  name: 'Office Jeans',
                  price: 45.99,
                  quantity: 1,
                },
                {
                  name: 'Black Elegance Jeans',
                  price: 69.99,
                  quantity: 2,
                },
                {
                  name: 'Slim Fit Jeans',
                  price: 55.99,
                  quantity: 1,
                },
              ],
            }}
          />
        }
      />
    </CustomRoutes>
  </Admin>
);
