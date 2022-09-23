import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  alpha,
  Paper,
} from '@mui/material';
import { Container } from '@mui/system';
import { CusLoading } from 'components/CusLoading';
import {
  FaFacebookSquare,
  FaTelegram,
  FaPhoneSquareAlt,
  FaHouseUser,
} from 'react-icons/fa';
import theme from 'theme/theme';
import { Location } from 'iconsax-react';
import THEME_UTIL from 'utils/theme-util';

export default function CustomerDetails({
  custDetails,
  isLoadingCustDetails,
}: {
  custDetails: ICustomer.ICustomerDetails | undefined;
  isLoadingCustDetails: boolean;
}) {
  const formatInvoiceId = (value: string) => {
    const pad = '00000';
    return pad.substring(0, pad.length - value.length) + value;
  };

  return (
    <>
      {isLoadingCustDetails ? (
        <Stack
          alignItems={'center'}
          sx={{ height: 'calc(100vh - 88px)' }}
          justifyContent='center'
        >
          <CusLoading />
        </Stack>
      ) : (
        <Container sx={{ mb: 4 }}>
          <Grid container>
            <Grid item xs={12}>
              <Stack alignItems={'center'} spacing={2}>
                <Avatar
                  sx={{
                    width: 72,
                    height: 72,
                    background: THEME_UTIL.goldGradientMain,
                    color: (theme) => theme.palette.secondary.main,
                    textTransform: 'uppercase',
                    fontSize: 24,
                    boxShadow: (theme) => theme.shadows[1],
                  }}
                >
                  {custDetails?.customer.customer_name.charAt(0)}
                </Avatar>
                <Typography variant='h6'>
                  {custDetails?.customer.customer_name}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Stack direction={'column'} spacing={2}>
            <Typography variant='h6'>Information</Typography>
            <List
              sx={{ boxShadow: (theme) => theme.shadows[1], borderRadius: 2 }}
            >
              {!!custDetails?.customer.facebook_name && (
                <ListItem>
                  <ListItemIcon>
                    <FaFacebookSquare
                      style={{ height: 32, color: theme.palette.info.dark }}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    {custDetails?.customer.facebook_name}
                  </ListItemText>
                </ListItem>
              )}
              {!!custDetails?.customer.telegram_name && (
                <ListItem>
                  <ListItemIcon>
                    <FaTelegram
                      style={{ height: 32, color: theme.palette.info.main }}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    {custDetails?.customer.telegram_name}
                  </ListItemText>
                </ListItem>
              )}
              {!!custDetails?.customer.contact_number && (
                <ListItem>
                  <ListItemIcon>
                    <FaPhoneSquareAlt
                      style={{ height: 32, color: theme.palette.success.main }}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    {custDetails?.customer.contact_number}
                  </ListItemText>
                </ListItem>
              )}
              <ListItem>
                <ListItemIcon>
                  <FaHouseUser
                    style={{ height: 32, color: theme.palette.primary.main }}
                  />
                </ListItemIcon>
                <ListItemText>
                  {`${custDetails?.customer.house}  ${custDetails?.customer.street}  ${custDetails?.customer.location}
                ${custDetails?.customer.commune}   ${custDetails?.customer.district}  ${custDetails?.customer.province}`}
                </ListItemText>
              </ListItem>
            </List>
            <Stack direction={'row'} spacing={2}>
              <Typography variant='h6'>Ordered</Typography>
              <Typography
                variant='h6'
                sx={{
                  background: (theme) => alpha(theme.palette.primary.main, 0.3),
                  color: (theme) => theme.palette.primary.main,
                  px: 2,
                  borderRadius: 2,
                }}
              >
                {custDetails?.orders.length}
              </Typography>
            </Stack>
            {custDetails?.orders.map((data) => (
              <Paper key={data.id} elevation={1} sx={{ overflow: 'hidden' }}>
                <Grid container columnSpacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={2}
                    md={3}
                    sx={{
                      background: (theme) => theme.palette.primary.main,
                    }}
                  >
                    <Stack
                      direction={'row'}
                      alignItems='center'
                      justifyContent={'center'}
                      sx={{ height: '100%', width: '100%' }}
                    >
                      <Typography variant='subtitle1'>
                        {formatInvoiceId(data.id.toString())}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} sm={5} md={4} sx={{ py: 1 }}>
                    <Stack direction={'column'} spacing={1} sx={{ ml: 2 }}>
                      <Typography variant='subtitle1' fontWeight={'Bold'}>
                        {data.type}
                      </Typography>
                      <Stack direction={'row'} alignItems='center' spacing={1}>
                        <Location
                          size='16'
                          color={theme.palette.info.main}
                          variant='Bold'
                        />
                        <Typography variant='subtitle2'>
                          {data.location}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} sm={5} md={4} sx={{ py: 1 }}>
                    <Stack direction={'column'} spacing={1} sx={{ ml: 2 }}>
                      <Typography variant='subtitle2'>{data.date}</Typography>
                      <Typography variant='subtitle2'>
                        {data.quantity} តុ
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Stack>
        </Container>
      )}
    </>
  );
}
