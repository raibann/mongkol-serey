import {
  Button,
  Drawer,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import { Add, SearchNormal1 } from 'iconsax-react';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import theme from 'theme/theme';
import CustCard from './CustCard';
import CustomerDetails from './CustomerDetails';
import CustomerForm, { CustomerInput } from './CustomerDrawer/CustomerForm';
export interface ICustCard extends CustomerInput {
  id: number;
  profile: string;
  upComing: string;
  ordered: number;
  lastOrder: string;
  gift: number;
}
const CustCardData: ICustCard[] = [
  {
    id: 1,
    profile: '',
    upComing: '2 Days',
    ordered: 3,
    lastOrder: '21-07-2022',
    gift: 3,
    customerName: 'abc',
    contact: '0987654328',
    facebook: 'abc',
    telegram: 'abc',
    houseNo: '21',
    stNo: '2004',
    location: 'Borey abc',
    province: 'Phnom Penh',
    district: 'Saen Sok',
    commune: 'Tek Tla',
  },
  {
    id: 2,
    profile: '',
    upComing: '2 Days',
    ordered: 3,
    lastOrder: '21-07-2022',
    gift: 3,
    customerName: 'abc',
    contact: '0987654328',
    facebook: 'abc',
    telegram: 'abc',
    houseNo: '21',
    stNo: '2004',
    location: 'Borey abc',
    province: 'Phnom Penh',
    district: 'Saen Sok',
    commune: 'Tek Tla',
  },
  {
    id: 3,
    profile: '',
    upComing: '2 Days',
    ordered: 3,
    lastOrder: '21-07-2022',
    gift: 3,
    customerName: 'abc',
    contact: '0987654328',
    facebook: 'abc',
    telegram: 'abc',
    houseNo: '21',
    stNo: '2004',
    location: 'Borey abc',
    province: 'Phnom Penh',
    district: 'Saen Sok',
    commune: 'Tek Tla',
  },
  {
    id: 4,
    profile: '',
    upComing: '2 Days',
    ordered: 3,
    lastOrder: '21-07-2022',
    gift: 3,
    customerName: 'abc',
    contact: '0987654328',
    facebook: 'abc',
    telegram: 'abc',
    houseNo: '21',
    stNo: '2004',
    location: 'Borey abc',
    province: 'Phnom Penh',
    district: 'Saen Sok',
    commune: 'Tek Tla',
  },
  {
    id: 5,
    profile: '',
    upComing: '2 Days',
    ordered: 3,
    lastOrder: '21-07-2022',
    gift: 3,
    customerName: 'abc',
    contact: '0987654328',
    facebook: 'abc',
    telegram: 'abc',
    houseNo: '21',
    stNo: '2004',
    location: 'Borey abc',
    province: 'Phnom Penh',
    district: 'Saen Sok',
    commune: 'Tek Tla',
  },
  {
    id: 6,
    profile: '',
    upComing: '2 Days',
    ordered: 3,
    lastOrder: '21-07-2022',
    gift: 3,
    customerName: 'abc',
    contact: '0987654328',
    facebook: 'abc',
    telegram: 'abc',
    houseNo: '21',
    stNo: '2004',
    location: 'Borey abc',
    province: 'Phnom Penh',
    district: 'Saen Sok',
    commune: 'Tek Tla',
  },
  {
    id: 7,
    profile: '',
    upComing: '2 Days',
    ordered: 3,
    lastOrder: '21-07-2022',
    gift: 3,
    customerName: 'abc',
    contact: '0987654328',
    facebook: 'abc',
    telegram: 'abc',
    houseNo: '21',
    stNo: '2004',
    location: 'Borey abc',
    province: 'Phnom Penh',
    district: 'Saen Sok',
    commune: 'Tek Tla',
  },
];
export default function Customers() {
  const [openDrawer, setOpenDrawer] = useState<'Add' | 'Edit' | 'Details' | ''>(
    ''
  );
  const [selectedData, setSelectedData] = useState(CustCardData);
  const methods = useForm<CustomerInput>();
  // handle add and edit stock
  const handleOpenDrawer = (obj: 'Add' | 'Edit' | 'Details' | '') => {
    setOpenDrawer(obj);
  };
  return (
    <>
      <PageHeader pageTitle={'Customers'}>
        <CusTextField
          placeholder='Search...'
          size='small'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchNormal1 size='20' color={theme.palette.primary.main} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant='contained'
          startIcon={<Add />}
          sx={{
            color: theme.palette.common.white,
            boxShadow: theme.shadows[1],
            borderRadius: 2,
          }}
          onClick={() => handleOpenDrawer('Add')}
        >
          Add New
        </Button>
      </PageHeader>
      <Stack spacing={2} px={2}>
        <CustCard
          {...{
            handleOpenDrawer,
            CustCardData,
            setSelectedData,
          }}
        />
      </Stack>
      <Drawer
        open={!!openDrawer}
        onClose={() => {
          setOpenDrawer('');
        }}
        anchor={'right'}
        PaperProps={{ sx: { borderRadius: 0, width: '50vw' } }}
      >
        <Container>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            py={3}
          >
            <Typography variant='h4' color='secondary.main' fontWeight='bold'>
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
                <Typography
                  padding={2}
                  variant='h6'
                  sx={{
                    background: (theme) => theme.palette.background.paper,
                    borderRadius: 2,
                  }}
                >
                  Customer Info
                </Typography>
                <CustomerForm />
              </form>
            </FormProvider>
          )}

          {openDrawer === 'Details' &&
            selectedData.map((data) => (
              <React.Fragment key={data.id}>
                <CustomerDetails {...{ data }} />
              </React.Fragment>
            ))}
        </Container>
      </Drawer>
    </>
  );
}
