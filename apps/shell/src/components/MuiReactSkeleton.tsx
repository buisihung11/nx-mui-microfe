'use client';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function MuiSkeleton() {
  return (
    <Box sx={{ width: '100%', padding: 0 }}>
      <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
        <Skeleton variant="text" width={100} sx={{ bgcolor: 'grey.800' }} />
      </Typography>

      <Stack
        spacing={{
          xs: 1,
          sm: 3,
        }}
      >
        <Grid container spacing={{ xs: 1, sm: 3 }}>
          {[0, 1, 2, 3].map((index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <SkeletonCard key={index} height={60} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={{ xs: 1, sm: 3 }}>
          {[0, 1].map((index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <SkeletonCard key={index} height={150} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

const SkeletonCard = ({ height }: { height: number }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Typography variant="subtitle1">
        <Skeleton width={60} />
      </Typography>
      <Typography variant="h3">
        <Skeleton width={80} />
      </Typography>
      <Typography variant="body2" sx={{ color: 'grey.500', mb: 2 }}>
        <Skeleton width={120} />
      </Typography>
      <Skeleton variant="rectangular" height={height} />
    </CardContent>
  </Card>
);
