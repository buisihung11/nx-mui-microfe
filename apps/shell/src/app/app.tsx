import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import DashboardLayout from './Dashboard';
import MuiReactSkeleton from '../components/MuiReactSkeleton';

const MuiReactts = React.lazy(() => import('mui_reactts/Module'));

export function App() {
  return (
    <React.Suspense fallback={<p>Loading host app</p>}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin/mui-reactts">Admin Page</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="apps/shell" />} />
        <Route path="admin">
          <Route element={<DashboardLayout />}>
            <Route
              path='mui-reactts/*'
              element={
                <React.Suspense fallback={<MuiReactSkeleton />}>
                  <MuiReactts />
                </React.Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
