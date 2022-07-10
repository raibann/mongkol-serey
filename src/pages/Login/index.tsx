import {
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import ErrorDialog from 'components/CusDialog/errorDailog';
import { Eye, EyeSlash } from 'iconsax-react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import theme from 'theme/theme';

interface Ilogin {
  username: string;
  password: string;
}
export default function Login() {
  const [values, setValues] = React.useState(false);
  const [errAlert, setErrAlert] = React.useState(false);
  const { control, handleSubmit } = useForm<Ilogin>();
  const user: Ilogin = {
    username: 'raibann.rb@gmail.com',
    password: 'Raibann21',
  };
  // console.log('userLogin:', user);
  // handle login
  const handleLogin = (data: Ilogin) => {
    if (JSON.stringify(data) !== JSON.stringify(user)) {
      setErrAlert(true);
    }
    console.log(data);
  };
  // console.log('errors', errors);
  const showPwd = () => {
    setValues((prevValue) => !prevValue);
  };
  return (
    <Grid container>
      <Grid
        item
        xs={6}
        sx={{
          backgroundImage: `url('/images/login_banner.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      ></Grid>
      <Grid item xs={6} sx={{ height: '100vh' }}>
        <ErrorDialog
          open={errAlert}
          errorMessage={'Incorrect username or password!'}
          onCloseDialog={() => setErrAlert(false)}
        />
        <Stack
          alignItems={'center'}
          justifyContent='center'
          sx={{ height: '100%', px: 4 }}
        >
          <Box sx={{ width: ['100%', '60%'] }}>
            <Stack alignItems={'center'}>
              <Avatar
                variant='square'
                src='/images/mongkul_serey_logo-01.svg'
                sx={{ width: 300, height: 'auto' }}
              />
              <form
                onSubmit={handleSubmit(handleLogin)}
                style={{ width: '100%' }}
              >
                <Stack sx={{ width: '100%' }} spacing={4}>
                  <Stack spacing={1}>
                    <Typography
                      variant='subtitle1'
                      sx={{ color: (theme) => theme.palette.text.primary }}
                    >
                      Username
                    </Typography>
                    <Controller
                      name='username'
                      control={control}
                      defaultValue=''
                      rules={{
                        required: {
                          message: 'Username is required!',
                          value: true,
                        },
                      }}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          error={Boolean(error)}
                          label='Outlined'
                          variant='outlined'
                          fullWidth
                          helperText={!error ? '' : error?.message}
                        />
                      )}
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <Typography
                      variant='subtitle1'
                      sx={{ color: (theme) => theme.palette.text.primary }}
                    >
                      Password
                    </Typography>
                    <Controller
                      name='password'
                      control={control}
                      defaultValue=''
                      rules={{
                        minLength: 6,
                        required: {
                          message: 'Password is required!',
                          value: true,
                        },
                      }}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          error={Boolean(error)}
                          label='Outlined'
                          variant='outlined'
                          fullWidth
                          type={values ? 'text' : 'password'}
                          helperText={!error ? '' : error?.message}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position='start'>
                                <IconButton onClick={showPwd}>
                                  {values ? (
                                    <EyeSlash
                                      size='24'
                                      color={theme.palette.text.primary}
                                    />
                                  ) : (
                                    <Eye
                                      size='24'
                                      color={theme.palette.text.primary}
                                    />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    />
                  </Stack>
                  <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    type='submit'
                    sx={{ boxShadow: 0, py: 2, borderRadius: 3 }}
                  >
                    Login
                  </Button>
                  <Typography
                    variant='caption'
                    textAlign={'center'}
                    whiteSpace='pre-line'
                  >
                    {`By continuing, you agree to accept our 
                Privacy Policy & Terms of Service.`}
                  </Typography>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
