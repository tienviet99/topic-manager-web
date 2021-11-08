import { Switch, Route } from 'react-router-dom';
import { appRoutes } from 'routes/routes.routes';

import Sidebar from 'components/sidebar';

export default function Layout() {
  const renderRoutes = (routes: typeof appRoutes) =>
    routes.map((route) => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ));

  return (
    <>
      <div
        className="w-full min-h-screen "
        style={{ backgroundColor: '#0c2461' }}
      >
        <Sidebar />
        <div className="ml-72 p-3 max-h-screen">
          <div
            className="p-5 w-full rounded-2xl bg-blue-50 overflow-y-auto"
            style={{ height: '97vh' }}
          >
            <Switch>{renderRoutes(appRoutes)}</Switch>
          </div>
        </div>
      </div>
    </>
  );
}
