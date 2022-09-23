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
import { Controller, useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import { paidBy } from 'utils/expense-util';
import { cateName } from 'utils/stock-util';
import { validatePatterns } from 'utils/validate-util';
interface IAddStockInput {
  categoryName: string;
  productName: string;
  quantity: string;
  amountInUSD: string;
  shopName: string;
  paidBy: string;
  usedStock: number;
  amountInKHR: string;
}

export default function FormStock({
  handleOpenDrawer,
  openDrawer,
}: {
  handleOpenDrawer: (obj: 'Add' | 'Edit' | '') => void;
  openDrawer: '' | 'Add' | 'Edit';
}) {
  const { control, handleSubmit, setValue } = useForm<IAddStockInput>();
  const handleAddStocks = (data: IAddStockInput) => {
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
            }}
          >
            <MdClose />
          </CusIconButton>
        </Stack>
        <form onSubmit={handleSubmit(handleAddStocks)}>
          <Stack spacing={4}>
            <Stack direction={'row'} spacing={4}>
              <Controller
                control={control}
                name='categoryName'
                defaultValue=''
                rules={{
                  required: { value: true, message: 'Category is required' },
                }}
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => {
                  return (
                    <LabelTextField label='Category Name'>
                      <Autocomplete
                        freeSolo
                        disableClearable
                        openOnFocus
                        id='category'
                        onInputChange={(e, value) => {
                          setValue('categoryName', value);
                        }}
                        {...rest}
                        renderInput={(params) => (
                          <StyledOutlinedTextField
                            {...params}
                            error={Boolean(error)}
                            helperText={error?.message}
                            placeholder='Enter category name'
                          />
                        )}
                        options={cateName.map((data, i) => data)}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
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
            </Stack>
            <Stack direction={isSmDown ? 'column' : 'row'} spacing={4}>
              <Controller
                control={control}
                name='amountInUSD'
                defaultValue=''
                rules={{
                  pattern: {
                    value: validatePatterns.numberOnly,
                    message: 'Require number only',
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Amount In USD'>
                      <StyledOutlinedTextField
                        placeholder='Currency dollar'
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
              <Controller
                control={control}
                name='amountInKHR'
                rules={{
                  pattern: {
                    value: validatePatterns.numberOnly,
                    message: 'Require number only',
                  },
                }}
                defaultValue=''
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Amount In KHR'>
                      <StyledOutlinedTextField
                        placeholder='Currency khmer'
                        {...field}
                        error={Boolean(error)}
                        helperText={error?.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='start'>
                              KHR
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
          </Stack>
        </form>
      </Container>
    </>
  );
}
