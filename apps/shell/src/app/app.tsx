import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const MuiReactts = React.lazy(() => import('mui_reactts/Module'));

export function App() {
  return (
    <React.Suspense fallback={<p>Loadding...</p>}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mui-reactts">MuiReactts</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="apps/shell" />} />
        <Route path="/mui-reactts" element={<MuiReactts />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
