import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useDebounce, useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import { CusIconButton } from 'components/CusIconButton';
import Dialog, { IDialogRef } from 'components/Dialog';
import { ArrowRight2, Trash } from 'iconsax-react';
import CustTable from 'pages/Customers/components/CustomerTable';
import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { EnumCustomerType } from 'utils/data-util';
import { IOrderForm } from '..';
import CusTextField from 'components/CusTextField';
import { CusLoading } from 'components/CusLoading';

const SelectCustomer = () => {
  const theme = useTheme();
  const customerListRef = useRef<IDialogRef>();

  // React Hook Form
  const { setValue, watch } = useFormContext<IOrderForm>();
  const customer = watch('customer');

  // States
  const [search, setsearch] = useState('');

  // Requests
  const debounceSearch = useDebounce(search, { wait: 500 });
  const { data: dataCustomer, loading: loadingCustomer } = useRequest(
    () =>
      CUSTOMER_API.getCustomerList({
        size: 5,
        type: EnumCustomerType.CUSTOMER,
        search: search,
      }),
    { refreshDeps: [debounceSearch] }
  );

  useEffect(() => {
    setsearch('');
    if (customer) {
      customerListRef.current?.close();
    }
  }, [customer]);

  return (
    <>
      <Dialog
        ref={customerListRef}
        cusTitle='Select Customer'
        cusHeight='80vh'
        cusWidth={800}
        content={() => (
          <Stack spacing={2}>
            <CusTextField
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              size='small'
              placeholder='Search customer...'
            />

            {loadingCustomer ? (
              <Box display='grid' sx={{ placeItems: 'center' }}>
                <CusLoading />
              </Box>
            ) : (
              <CustTable
                data={dataCustomer?.response}
                disableAction
                onSelect={(customer) => setValue('customer', customer)}
              />
            )}
          </Stack>
        )}
      />

      {customer ? (
        <ListItem
          secondaryAction={
            <ListItemSecondaryAction>
              <CusIconButton onClick={() => setValue('customer', undefined)}>
                <Trash variant='Bold' color={theme.palette.error.main} />
              </CusIconButton>
            </ListItemSecondaryAction>
          }
        >
          <ListItemAvatar>
            <Avatar variant='rounded' />
          </ListItemAvatar>
          <ListItemText
            primary={customer.customer_name}
            secondary={customer.contact_number}
          />
        </ListItem>
      ) : (
        <Button
          disabled={loadingCustomer}
          onClick={() => customerListRef.current?.open()}
        >
          <Stack direction='row' justifyContent='space-between' width='100%'>
            <Typography>Select Customer</Typography>
            <ArrowRight2 color={theme.palette.secondary.main} />
          </Stack>
        </Button>
      )}
    </>
  );
};

export default SelectCustomer;
