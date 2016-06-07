import Layout from 'components/Layout';
import HomePage from 'pages/Home';
import ContactsPage from 'pages/Contacts';

const routes = {
  component: Layout,
  childRoutes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/contacts',
      component: ContactsPage,
    },
  ],
};

export default routes;
