import { Paper, Stack, Typography, Grid } from '@mui/material';
import EmptyResponse from 'components/ResponseUIs/EmptyResponse';
import { Facebook, Call, Personalcard, Cake } from 'iconsax-react';
import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import theme from 'theme/theme';
import { ROUTE_PATH } from 'utils/route-util';

const EventToday = ({
  listItem,
}: {
  listItem: IReminder.Data[] | undefined;
}) => {
  const temp = listItem?.filter((el) => moment().diff(el.date, 'years') === 1);
  const navigate = useNavigate();

  return (
    <>
      <EmptyResponse />
      {/* {temp && temp.length > 0 && (
        <Typography variant='h6' sx={{ pb: 2 }}>
          Anniversary today
        </Typography>
      )}

      <Grid container rowSpacing={2} columnSpacing={4}>
        {temp?.map((item) => (
          <React.Fragment key={item.id}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
              onClick={() => navigate(`${ROUTE_PATH.orders}?id=${item.id}`)}
            >
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
                    <Stack direction={'row'} spacing={1} alignItems='center'>
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
                        {item.customer !== null
                          ? item.customer.customer_name
                          : 'No Customer'}
                      </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1} alignItems='center'>
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
                        {item.customer !== null
                          ? item.customer.facebook_name
                          : 'No Social'}
                      </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1} alignItems='center'>
                      <Call color={theme.palette.success.main} variant='Bulk' />
                      <Typography
                        variant='body2'
                        color={theme.palette.secondary.light}
                      >
                        {item.customer !== null
                          ? item.customer.contact_number
                          : 'No Contact Number'}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          </React.Fragment>
        ))}
      </Grid> */}
    </>
  );
};

export default EventToday;
