import { Stack, Typography, Button, Autocomplete } from '@mui/material';
import { Container } from '@mui/system';
import { CusIconButton } from 'components/CusIconButton';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import { Controller, useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import { paidByBank } from '../AddStock';
interface IAddStockInput {
  categoryName: string;
  productName: string;
  quantity: string;
  price: string;
  shopName: string;
  paidBy: string;
}

const cateName = ['Grocery', 'Meats', 'Vegetable', 'Fruits', 'Drinks'];

export default function EditStock({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { control, handleSubmit, setValue } = useForm<IAddStockInput>();
  const handleAddStocks = (data: IAddStockInput) => {
    console.log('add new stocks:', data);
  };
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
            Edit Stocks
          </Typography>
          <CusIconButton
            color='error'
            onClick={() => {
              setOpen(false);
            }}
          >
            <MdClose />
          </CusIconButton>
        </Stack>
        <form onSubmit={handleSubmit(handleAddStocks)}>
          <Stack spacing={4}>
            <Stack direction={'row'} spacing={6}>
              <Controller
                control={control}
                name='categoryName'
                defaultValue=''
                render={({ field: { onChange, ...rest } }) => {
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
                            placeholder='Enter category name'
                          />
                        )}
                        options={cateName.map((data, i) => data)}
                      />
                    </LabelTextField>
                  );
                }}
              />

              <Controller
                control={control}
                name='productName'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Product Name'>
                      <StyledOutlinedTextField
                        placeholder='Enter product name'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack direction={'row'} spacing={6}>
              <Controller
                control={control}
                name='quantity'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Quantity'>
                      <StyledOutlinedTextField
                        placeholder='Enter quantity'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />

              <Controller
                control={control}
                name='price'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Price'>
                      <StyledOutlinedTextField
                        placeholder='Enter price'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack direction={'row'} spacing={6}>
              <Controller
                control={control}
                name='shopName'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Shop Name'>
                      <StyledOutlinedTextField
                        placeholder='Enter shop name'
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
                render={({ field: { onChange, ...rest } }) => {
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
                            placeholder='Enter paid by'
                          />
                        )}
                        options={paidByBank.map((data, i) => data)}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack direction={'row'} spacing={6}>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
                variant='contained'
                fullWidth
                sx={{
                  borderRadius: 3,
                  p: 2,
                  textTransform: 'capitalize',
                  boxShadow: 1,
                  color: (theme) => theme.palette.primary.main,
                  background: (theme) => theme.palette.secondary.main,
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
