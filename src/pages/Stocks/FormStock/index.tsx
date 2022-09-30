import {
  Stack,
  Typography,
  Button,
  Autocomplete,
  InputAdornment,
} from '@mui/material';
import { Container } from '@mui/system';
import { CusIconButton } from 'components/CusIconButton';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import useResponsive from 'hook/useResponsive';
import { Controller, UseFormReturn } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import { paidBy } from 'utils/expense-util';
import { validatePatterns } from 'utils/validate-util';
import { IStockInput } from '..';

export default function FormStock({
  handleOpenDrawer,
  openDrawer,
  methods,
}: {
  handleOpenDrawer: (obj: 'Add' | 'Edit' | '') => void;
  openDrawer: '' | 'Add' | 'Edit';
  methods: UseFormReturn<IStockInput, object>;
}) {
  const { control, handleSubmit, setValue } = methods;
  const handleAddStocks = (data: IStockInput) => {
    console.log('add new stocks:', data);
  };
  const { isSmDown } = useResponsive();
  return (
    <>
      <Container>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          py={3}
        >
          <Typography variant='h4' color='secondary.main' fontWeight='bold'>
            {openDrawer} Stocks
          </Typography>
          <CusIconButton
            color='error'
            onClick={() => {
              handleOpenDrawer('');
              methods.clearErrors();
            }}
          >
            <MdClose />
          </CusIconButton>
        </Stack>
        <form onSubmit={handleSubmit(handleAddStocks)}>
          <Stack spacing={4}>
            <Stack direction={isSmDown ? 'column' : 'row'} spacing={4}>
              <Controller
                control={control}
                name='productName'
                defaultValue=''
                rules={{
                  required: { value: true, message: 'Product is required' },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Product Name'>
                      <StyledOutlinedTextField
                        placeholder='Enter product name'
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />
              <Controller
                control={control}
                name='price'
                rules={{
                  required: { value: true, message: 'Price is required' },
                  pattern: {
                    value: validatePatterns.numberOnly,
                    message: 'Require number only',
                  },
                }}
                defaultValue=''
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Price'>
                      <StyledOutlinedTextField
                        placeholder='Enter price'
                        {...field}
                        error={Boolean(error)}
                        helperText={error?.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='start'>
                              USD
                            </InputAdornment>
                          ),
                        }}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack direction={isSmDown ? 'column' : 'row'} spacing={4}>
              <Controller
                control={control}
                name='quantity'
                defaultValue=''
                rules={{
                  required: { value: true, message: 'Quantity is required' },
                  pattern: {
                    value: validatePatterns.numberOnly,
                    message: 'Required only number',
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Quantity'>
                      <StyledOutlinedTextField
                        placeholder='Enter quantity'
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />
              <Controller
                control={control}
                name='unit'
                defaultValue=''
                rules={{
                  required: { value: true, message: 'Unit is required' },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Unit'>
                      <StyledOutlinedTextField
                        placeholder='Enter unit'
                        {...field}
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack direction={isSmDown ? 'column' : 'row'} spacing={4}>
              <Controller
                control={control}
                name='shopName'
                rules={{
                  required: { value: true, message: 'Shop is required' },
                }}
                defaultValue=''
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Shop Name'>
                      <StyledOutlinedTextField
                        placeholder='Enter shop name'
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />
              <Controller
                control={control}
                name='paidBy'
                defaultValue=''
                rules={{
                  required: { value: true, message: 'Paid By is required' },
                }}
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => {
                  return (
                    <LabelTextField label='Paid By'>
                      <Autocomplete
                        freeSolo
                        disableClearable
                        openOnFocus
                        id='paidby'
                        {...rest}
                        onInputChange={(e, value) => {
                          setValue('paidBy', value);
                        }}
                        renderInput={(params) => (
                          <StyledOutlinedTextField
                            {...params}
                            error={Boolean(error)}
                            helperText={error?.message}
                            placeholder='Enter paid by'
                          />
                        )}
                        options={paidBy.map((data, i) => data)}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack direction={'row'} spacing={4}>
              <Controller
                control={control}
                name='note'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Note'>
                      <StyledOutlinedTextField
                        placeholder='Type something here...'
                        {...field}
                        multiline
                        rows={4}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack direction={'row'} spacing={4} sx={{ py: 3 }}>
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
          </Stack>
        </form>
      </Container>
    </>
  );
}
