/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import Restaurant from '../views/pages/resto';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Restaurant, // default page
  '/home': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
