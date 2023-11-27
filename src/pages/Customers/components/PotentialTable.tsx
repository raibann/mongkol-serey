import { Avatar, Container, Grid, Stack, Typography } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Facebook, Send2 } from 'iconsax-react';
import { HiDotsHorizontal } from 'react-icons/hi';
import THEME_UTIL from 'utils/theme-util';

export default function PotentialTable(props: {
  data: ICustomer.Customer[] | undefined;
}) {
  return (
    <>
      <Container maxWidth='xl'>
        <Grid container rowGap={2} columnGap={2}>
          {props.data &&
            props.data.map((data, index) => {
              return (
                <Grid
                  key={data.id}
                  item
                  xs={12}
                  md={3.8}
                  sm={5.85}
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
                        variant='circular'
                        sx={{
                          height: 40,
                          width: 40,
                        }}
                      />
                      {/* Text item */}
                      <Stack direction={'column'}>
                        <Typography variant='body2'>
                          {data.customer_name}
                        </Typography>
                        <Stack
                          direction={'row'}
                          spacing={0.5}
                          alignItems={'center'}
                        >
                          {(data.telegram_name && (
                            <Send2
                              size='14'
                              color={THEME_UTIL.telegramColor}
                              variant='Bold'
                            />
                          )) ||
                            (data.facebook_name && (
                              <Facebook
                                size='14'
                                color={THEME_UTIL.facebookColor}
                                variant='Bold'
                              />
                            ))}
                          <Typography
                            variant='caption'
                            noWrap
                            color={'text.secondary'}
                          >
                            {data.facebook_name || data.telegram_name}
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
