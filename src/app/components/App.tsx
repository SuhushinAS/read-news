import {appPath} from 'app/constants';
import {Example} from 'modules/example/components/Example';
import {Feed} from 'modules/feed/components/Feed';
import {Home} from 'modules/home/components/Home';
import {Layout} from 'modules/layout/components/Layout';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<Example />} path={`${appPath.example}/*`} />
        <Route element={<Feed />} path={`${appPath.feed}/*`} />
        <Route element={<Home />} path={appPath.home} />
      </Routes>
    </Layout>
  );
};
