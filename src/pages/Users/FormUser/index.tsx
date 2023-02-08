import { LoadingButton } from '@mui/lab';
import { Container, Stack, Typography, Button } from '@mui/material';
import { useRequest } from 'ahooks';
import USER_API from 'api/user';
import { CusIconButton } from 'components/CusIconButton';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MdClose } from 'react-icons/md';

interface IRegister {
  id?: number;
  name: string;
  username: string;
  password: string;
  confirmPassowrd: string;
}

export default function FormUser({
  setOpenDrawer,
  openDrawer,
  onSuccess,
}: {
  onSuccess?: () => void;
  setOpenDrawer: (pre?: string | IAuth.User) => void;
  openDrawer?: string | IAuth.User;
}) {
  // ahooks
  const { run, loading } = useRequest(USER_API.saveUser, {
    manual: true,
    onSuccess: () => {
      onSuccess && onSuccess();
      setOpenDrawer(undefined);
    },
  });

  const { control, handleSubmit, watch, setValue } = useForm<IRegister>();

  // useEffect
  useEffect(() => {
    if (openDrawer && openDrawer !== 'add') {
      const data = openDrawer as IAuth.User;
      setValue('id', data.id);
      setValue('name', data.name);
      setValue('username', data.username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Methods
  const handleAddUser = (data: IRegister) => {
    const { confirmPassowrd, ...rest } = data;
    run(rest);
  };

  return (
    <Container>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        py={3}
      >
        <Typography variant='h4' color='secondary.main' fontWeight='bold'>
          {openDrawer === 'add' ? 'Add New user' : 'Edit User'}
        </Typography>
        <CusIconButton color='error' onClick={() => setOpenDrawer(undefined)}>
          <MdClose />
        </CusIconButton>
      </Stack>
      <form onSubmit={handleSubmit(handleAddUser)}>
        <Stack spacing={3}>
          <Controller
            control={control}
            name='name'
            defaultValue=''
            rules={{
              required: { value: true, message: 'Name is required' },
            }}
            render={({
              field: { onChange, ...rest },
              fieldState: { error },
            }) => {
              return (
                <LabelTextField label='Full Name'>
                  <StyledOutlinedTextField
                    placeholder='Enter Full Name'
                    onChange={(e) => {
                      onChange(e);
                      setValue(
                        'username',
                        e.target.value?.toLowerCase().replace(/\s/g, '')
                      );
                    }}
                    error={Boolean(error)}
                    helperText={error?.message}
                    {...rest}
                  />
                </LabelTextField>
              );
            }}
          />
          <Controller
            control={control}
            name='username'
            defaultValue=''
            rules={{
              required: { value: true, message: 'username is required' },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Username'>
                  <StyledOutlinedTextField
                    placeholder='Enter username'
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
            name='password'
            rules={{
              required: { value: true, message: 'Password is required' },
              minLength: {
                value: 6,
                message: 'Password must be 6 characters long',
              },
            }}
            defaultValue=''
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Password'>
                  <StyledOutlinedTextField
                    type='password'
                    placeholder='Enter password'
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
            name='confirmPassowrd'
            rules={{
              required: {
                value: true,
                message: 'Confirm password is required',
              },
              validate: (val: string) => {
                if (watch('password') !== val) {
                  return 'Passwords do not match';
                }
              },
            }}
            defaultValue=''
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Confirm password'>
                  <StyledOutlinedTextField
                    type='password'
                    placeholder='Enter confirm password'
                    error={Boolean(error)}
                    helperText={error?.message}
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />

          <Stack direction={'row'} spacing={4} sx={{ pt: 3 }}>
            <Button
              onClick={() => setOpenDrawer(undefined)}
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
            <LoadingButton
              loading={loading}
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
            </LoadingButton>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
}
