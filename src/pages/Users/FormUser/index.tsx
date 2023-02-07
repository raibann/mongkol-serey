import { Container, Stack, Typography, Button } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import { useForm, Controller } from 'react-hook-form';
import { MdClose } from 'react-icons/md';

interface IRegister {
  name: string;
  username: string;
  password: string;
  confirmPassowrd: string;
}

export default function FormUser({
  setOpenDrawer,
  openDrawer,
}: {
  setOpenDrawer: (pre?: string | IAuth.User) => void;
  openDrawer?: string | IAuth.User;
}) {
  const { control, handleSubmit, watch } = useForm<IRegister>();
  const handleAddUser = (data: IRegister) => {};

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
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Full Name'>
                  <StyledOutlinedTextField
                    placeholder='Enter Full Name'
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
              required: { value: true, message: 'Passowrd is required' },
            }}
            defaultValue=''
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Password'>
                  <StyledOutlinedTextField
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
                    placeholder='Enter confirm password'
                    error={Boolean(error)}
                    helperText={error?.message}
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />
          {/* <Controller
            control={control}
            name='roles'
            defaultValue=''
            rules={{
              required: { value: true, message: 'Role is required' },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Role'>
                  <StyledOutlinedTextField
                    {...field}
                    select
                    error={Boolean(error)}
                    helperText={error?.message}
                    label='Select a role'
                  >
                    {role.map((data, i) => (
                      <MenuItem key={i} value={data}>
                        {data}
                      </MenuItem>
                    ))}
                  </StyledOutlinedTextField>
                </LabelTextField>
              );
            }}
          /> */}
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
  );
}
