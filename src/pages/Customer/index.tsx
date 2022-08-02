import { Button, InputAdornment, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import ResponsiveDrawer from 'components/CusDrawer/ResponsiveDrawer';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, SearchNormal1 } from 'iconsax-react';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import theme from 'theme/theme';
import { customerCard } from 'utils/cutomer-util';
import CustCard from './CustCard';
import CustomerDetails from './CustomerDetails';
import CustomerForm, { CustomerInput } from './CustForm/CustomerForm';

export default function Customers() {
  const [openDrawer, setOpenDrawer] = useState<'Add' | 'Edit' | 'Details' | ''>(
    ''
  );
  const [selectedData, setSelectedData] = useState(customerCard);
  const methods = useForm<CustomerInput>();
  const { isSmDown } = useResponsive();
  // handle add and edit stock
  const handleOpenDrawer = (obj: 'Add' | 'Edit' | 'Details' | '') => {
    setOpenDrawer(obj);
  };

  return (
    <>
      <PageHeader pageTitle={'Customers'}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={isSmDown ? 'flex-start' : 'flex-end'}
          spacing={2}
        >
          <Button
            variant='contained'
            startIcon={<Add />}
            sx={{
              color: theme.palette.common.white,
              boxShadow: theme.shadows[1],
              borderRadius: 2,
              height: 40,
              width: ['70%', 'auto', 'auto'],
            }}
            onClick={() => handleOpenDrawer('Add')}
          >
            Add New
          </Button>
          <CusTextField
            placeholder='Search...'
            size='small'
            fullWidth={isSmDown}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <SearchNormal1 size='20' color={theme.palette.primary.main} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </PageHeader>
      <Container maxWidth={'xl'}>
        <CustCard
          {...{
            handleOpenDrawer,
            customerCard,
            setSelectedData,
          }}
        />
      </Container>
      <ResponsiveDrawer
        open={!!openDrawer}
        onCloseDrawer={() => {
          // setOpenDrawer('');
        }}
        anchor={'right'}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          py={3}
          px={3}
        >
          <Typography variant='h5' color='secondary.main' fontWeight='bold'>
            {openDrawer === 'Add' && 'Add New Customer'}
            {openDrawer === 'Edit' && 'Edit Customer Details'}
            {openDrawer === 'Details' && 'Customer Details'}
          </Typography>
          <CusIconButton
            color='error'
            onClick={() => {
              handleOpenDrawer('');
            }}
          >
            <MdClose />
          </CusIconButton>
        </Stack>
        {openDrawer === 'Add' && (
          <FormProvider {...methods}>
            <form>
              <CustomerForm />
              <Stack direction={'row'} spacing={4} sx={{ px: 3, py: 4 }}>
                <Button
                  onClick={() => {
                    handleOpenDrawer('');
                  }}
                  variant='contained'
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    textTransform: 'capitalize',
                    boxShadow: 1,
                    color: (theme) => theme.palette.common.white,
                    background: (theme) => theme.palette.error.main,
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    textTransform: 'capitalize',
                    boxShadow: 1,
                    color: (theme) => theme.palette.common.white,
                  }}
                >
                  Save
                </Button>
              </Stack>
            </form>
          </FormProvider>
        )}
        {openDrawer === 'Edit' && (
          <FormProvider {...methods}>
            <form>
              <CustomerForm />
              <Stack direction={'row'} spacing={4} sx={{ px: 3, py: 6 }}>
                <Button
                  onClick={() => {
                    handleOpenDrawer('');
                  }}
                  variant='contained'
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    textTransform: 'capitalize',
                    boxShadow: 1,
                    color: (theme) => theme.palette.common.white,
                    background: (theme) => theme.palette.error.main,
                    '&:hover': {
                      background: (theme) => theme.palette.error.main,
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    textTransform: 'capitalize',
                    boxShadow: 1,
                    color: (theme) => theme.palette.common.white,
                    '&:hover': {
                      background: (theme) => theme.palette.primary.main,
                    },
                  }}
                >
                  Save
                </Button>
              </Stack>
            </form>
          </FormProvider>
        )}
        {openDrawer === 'Details' &&
          selectedData.map((data) => (
            <React.Fragment key={data.id}>
              <CustomerDetails {...{ data }} />
            </React.Fragment>
          ))}
      </ResponsiveDrawer>
    </>
  );
}
