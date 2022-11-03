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
  Divider,
  Box,
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
import moment from 'moment';
import { formatCash, formatInvoiceId } from 'utils/validate-util';

export default function CustomerDetails({
  custDetails,
  isLoadingCustDetails,
  changeBackground,
}: {
  custDetails: ICustomer.ICustomerDetails | undefined;
  isLoadingCustDetails: boolean;
  changeBackground: (name?: string) => string;
}) {
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
                    background: changeBackground(
                      custDetails && custDetails?.customer.customer_name
                    ),
                    color: (theme) => theme.palette.common.white,
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
            <List>
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
                      style={{
                        height: 32,
                        color: theme.palette.success.main,
                      }}
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
                  {`${
                    custDetails?.customer.house
                      ? `ផ្ទះលេខ៖ ${custDetails?.customer.house}`
                      : ''
                  }  ${
                    custDetails?.customer.street
                      ? `ផ្លូវលេខ៖ ${custDetails?.customer.street}`
                      : ''
                  }  ${custDetails?.customer.location}
                ${custDetails?.customer.commune}   ${
                    custDetails?.customer.district
                  }  ${custDetails?.customer.province}`}
                </ListItemText>
              </ListItem>
            </List>
            <Divider />
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
              <Box
                key={data.id}
                sx={{
                  overflow: 'hidden',
                  bgcolor: (theme) => theme.palette.background.paper,
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                  p: 2,
                  borderLeft: `10px solid ${theme.palette.info.main}`,
                }}
              >
                <Grid container columnSpacing={2} rowSpacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Stack
                      direction={'column'}
                      justifyContent={'center'}
                      sx={{ height: '100%', width: '100%' }}
                    >
                      <Typography variant='subtitle1'>
                        Invoice : <b>{formatInvoiceId(data.id.toString())}</b>
                      </Typography>
                      <Typography variant='subtitle1'>
                        Total :{' '}
                        <b>
                          {formatCash(
                            data.finalInvoices.reduce(
                              (init, next) => init + next.price,
                              0
                            )
                          )}
                          $
                        </b>
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs>
                    <Stack direction={'column'} spacing={1}>
                      <Typography variant='subtitle1'>
                        Event : <b>{data.type}</b>
                      </Typography>
                      <Typography variant='subtitle2'>
                        Location : <b>{data.location}</b>
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs>
                    <Stack direction={'column'} spacing={1}>
                      <Typography variant='subtitle2'>
                        Date : <b>{moment(data.date).format('DD-MM-YYYY')}</b>
                      </Typography>
                      <Typography variant='subtitle2'>
                        Quantity :{' '}
                        <b>{Intl.NumberFormat().format(data.quantity)}</b> តុ
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Stack>
        </Container>
      )}
    </>
  );
}
