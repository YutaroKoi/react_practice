import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../App';
// import { Layout } from '../Layout';
import { NotFound } from '../NotFound';
import { Sample } from '../Sample';

export const Path = {
  app: '/',
  sample: '/sample',
};

const routes = (
  // <Layout>
  <Switch>
    <Route exact path={Path.app} component={App} />
    <Route exact path={Path.sample} component={Sample} />
    <Route component={NotFound} />
  </Switch>
  // </Layout>
);

export default routes;
