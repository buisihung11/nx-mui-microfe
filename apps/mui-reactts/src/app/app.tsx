import styled from '@emotion/styled';
import Dashboard from './Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Router>
        <Dashboard />
      </Router>
    </StyledApp>
  );
}

export default App;
