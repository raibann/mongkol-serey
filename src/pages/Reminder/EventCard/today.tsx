import { Paper, Stack, Typography, Grid } from '@mui/material';
import { Facebook, Call, Personalcard, Cake } from 'iconsax-react';
import moment from 'moment';
import React from 'react';
import theme from 'theme/theme';

const EventToday = ({
  listItem,
}: {
  listItem: IReminder.IReminderData | undefined;
}) => {
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={4}>
        {listItem &&
          listItem.data.map(
            (item) =>
              moment().diff(item.date, 'years') === 1 && (
                <React.Fragment key={item.id}>
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Paper sx={{ p: 3 }}>
                      <Typography
                        variant='subtitle1'
                        textAlign={'center'}
                        color={theme.palette.secondary.main}
                        fontWeight={600}
                      >
                        Happy Aniversary
                      </Typography>
                      <Typography
                        variant='subtitle2'
                        gutterBottom
                        textAlign={'center'}
                        color={theme.palette.secondary.light}
                      >
                        {moment(item.date).format('YYYY-MM-DD')}
                      </Typography>
                      <Stack
                        direction={'row'}
                        alignItems='center'
                        justifyContent={'center'}
                        spacing={2}
                      >
                        <Stack
                          sx={{
                            height: '100%',
                            bgcolor: theme.palette.common.white,
                            boxShadow: theme.shadows[1],
                            borderRadius: 2,
                          }}
                          alignItems='center'
                          justifyContent={'center'}
                          direction={'column'}
                        >
                          <Cake
                            size='80'
                            color={theme.palette.primary.main}
                            variant='Bulk'
                          />
                        </Stack>
                        <Stack direction={'column'} spacing={0.5}>
                          <Stack
                            direction={'row'}
                            spacing={1}
                            alignItems='center'
                          >
                            <Personalcard
                              color={theme.palette.warning.main}
                              variant='Bulk'
                            />
                            <Typography
                              variant='body2'
                              color={theme.palette.secondary.light}
                              sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: 120,
                              }}
                            >
                              {item.customer.customer_name}
                            </Typography>
                          </Stack>
                          <Stack
                            direction={'row'}
                            spacing={1}
                            alignItems='center'
                          >
                            <Facebook
                              color={theme.palette.info.main}
                              variant='Bulk'
                            />
                            <Typography
                              variant='body2'
                              color={theme.palette.secondary.light}
                              sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: 120,
                              }}
                            >
                              {item.customer.facebook_name}
                            </Typography>
                          </Stack>
                          <Stack
                            direction={'row'}
                            spacing={1}
                            alignItems='center'
                          >
                            <Call
                              color={theme.palette.success.main}
                              variant='Bulk'
                            />
                            <Typography
                              variant='body2'
                              color={theme.palette.secondary.light}
                            >
                              {item.customer.contact_number}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>
                </React.Fragment>
              )
          )}
      </Grid>
    </>
  );
};

export default EventToday;
