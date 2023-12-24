import { Stack, Skeleton } from '@mui/material';
import React from 'react';

export default function FormSkeleton() {
  return (
    <>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
        <Skeleton variant='circular' width={80} height={80} />
      </Stack>
      {Array(4)
        .fill('')
        .map((_, i) => (
          <Stack direction={'row'} spacing={2} key={i}>
            <Skeleton
              animation='wave'
              variant='text'
              sx={{ fontSize: '1rem', width: '50%', height: '50px' }}
            />
            <Skeleton
              animation='wave'
              variant='text'
              sx={{ fontSize: '1rem', width: '50%', height: '50px' }}
            />
          </Stack>
        ))}
    </>
  );
}
