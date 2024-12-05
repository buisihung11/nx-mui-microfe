import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-charts/themeAugmentation';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Header from '@myorg/design-system/components/Header';
import SideMenu from '@myorg/design-system/components/SideMenu';
import AppNavbar from '@myorg/design-system/components/AppNavbar';
import MainGrid from '@myorg/design-system/components/MainGrid';
import AppTheme from '@myorg/design-system/theme/shared-theme/AppTheme';

import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '@myorg/design-system/theme/customizations';
import { Routes, Route } from 'react-router-dom';
import Analytics from './Analytics';
import Clients from './Clients';
import Tasks from '@mui_reactts/app/Tasks';
import Settings from '@mui_reactts/app/Settings';
import About from '@mui_reactts/app/About';
import Feedback from '@mui_reactts/app/Feedback';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <Route path="/mui-reacts">
              <Route path="/mui-reactts" element={<MainGrid />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
              <Route path="/feedback" element={<Feedback />} />
              {/* Add more routes here */}
            </Route>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
