import MainGrid from '@myorg/design-system/components/MainGrid';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Analytics from './Analytics';
import TodoPage from './Todo/page';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const Feedback = lazy(
  () =>
    new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve(import('./Feedback'));
      }, 2000);
    })
);

const Tasks = lazy(() => import('./Tasks'));

export function App() {
  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
        <Link to="">Home</Link>
        <Link to="analytics">Analytics</Link>
        <Link to="todo">Todo</Link>
        <Link to="feedback">Feedback (Lazy)</Link>
        <Link to="tasks">Tasks (Lazy)</Link>
      </Stack>
      <Suspense fallback={<LazyRouteSkeleton />}>
        <Routes>
          <Route index element={<MainGrid />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="tasks" element={<Tasks />} />
        </Routes>
      </Suspense>
    </>
  );
}

const LazyRouteSkeleton = () => <p>Loading Lazy Route...</p>;

export default App;
