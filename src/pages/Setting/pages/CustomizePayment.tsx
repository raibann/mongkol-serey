import { Button, Container, Stack } from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import PageHeader from 'components/PageHeader';
import { Controller, useForm } from 'react-hook-form';
import CustomizePaymentTable from '../components/CustomizePaymentTable';

interface InputPayment {
  name: string;
  color: string;
}

export default function CustomizePayment() {
  // hooks
  const { control, handleSubmit } = useForm<InputPayment>();

  // methods
  const onSubmit = (data: InputPayment) => {
    console.log(data);
  };
  return (
    <>
      <PageHeader pageTitle='Customize Payments'>
        <Stack
          direction={'row'}
          component='form'
          spacing={2}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            control={control}
            name='name'
            defaultValue=''
            render={({ field, fieldState }) => (
              <LabelTextField
                size='small'
                fieldState={fieldState}
                placeholder='Name'
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            defaultValue=''
            name='color'
            render={({ field, fieldState }) => (
              <LabelTextField
                size='small'
                fieldState={fieldState}
                {...field}
                placeholder='#000000'
              />
            )}
          />
          <Button
            variant='contained'
            size='small'
            disableElevation
            sx={{
              color: 'common.white',
            }}
            type='submit'
          >
            Save
          </Button>
        </Stack>
      </PageHeader>
      <Container maxWidth='xl'>
        <CustomizePaymentTable />
      </Container>
    </>
  );
}
