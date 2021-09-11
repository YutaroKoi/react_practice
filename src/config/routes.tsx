import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import App from '../App';
import { Sample } from '../Sample';

export const Path = {
  app: '/',
  sample: '/sample',
};

const routes = (
  <Switch>
    <Route exact path={Path.app} component={App} />
    <Route exact path={Path.sample} component={Sample} />
    <Redirect to={Path.app} />
  </Switch>
);

export default routes;
