import { Avatar, Container, Grid, Stack, Typography } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Send2 } from 'iconsax-react';
import { HiDotsHorizontal } from 'react-icons/hi';
import THEME_UTIL from 'utils/theme-util';

export default function PotentialTable() {
  return (
    <>
      <Container maxWidth='xl'>
        <Grid container rowGap={2} columnGap={2}>
          {Array(10)
            .fill('')
            .map((_, i) => {
              return (
                <Grid
                  key={i}
                  item
                  xs={12}
                  sm={3.88}
                  sx={{
                    background: (theme) => theme.palette.background.default,
                    p: 2,
                    borderRadius: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    width={'100%'}
                    justifyContent={'space-between'}
                  >
                    <Stack direction={'row'} spacing={2}>
                      {/* Avatar */}
                      <Avatar
                        alt='Remy Sharp'
                        src='/static/images/avatar/1.jpg'
                        variant='rounded'
                        sx={{
                          height: 40,
                          width: 40,
                          borderRadius: 2,
                        }}
                      />
                      {/* Text item */}
                      <Stack direction={'column'}>
                        <Typography variant='body2'>Name</Typography>
                        <Stack
                          direction={'row'}
                          spacing={0.5}
                          alignItems={'center'}
                        >
                          <Send2
                            size='14'
                            color={THEME_UTIL.telegramColor}
                            variant='Bold'
                          />
                          <Typography
                            variant='caption'
                            noWrap
                            color={'text.secondary'}
                          >
                            @Raibann
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                    <CusIconButton
                      sx={{
                        boxShadow: 0,
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      <HiDotsHorizontal />
                    </CusIconButton>
                  </Stack>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}
