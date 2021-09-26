import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../App';
// import { Layout } from '../Layout';
import { NotFound } from '../NotFound';
import { GoogleBookSearch } from '../GoogleBookSearch';

export const Path = {
  app: '/',
  googleBookSearch: '/google_book_search',
};

const routes = (
  // <Layout>
  <Switch>
    <Route exact path={Path.app} component={App} />
    <Route exact path={Path.googleBookSearch} component={GoogleBookSearch} />
    <Route component={NotFound} />
  </Switch>
  // </Layout>
);

export default routes;
