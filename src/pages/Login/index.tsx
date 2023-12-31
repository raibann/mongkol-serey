import { LoadingButton } from '@mui/lab';
import {
  Avatar,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import CusOutlineInput from 'components/CusTextField/CusOutlineInput';
import React from 'react';
import theme from 'theme/theme';
import THEME_UTIL from 'utils/theme-util';
import { Box } from '@mui/system';
import { useAuthContext } from 'context/AuthContext';
import { Eye, EyeSlash } from 'iconsax-react';
import { Controller, useForm } from 'react-hook-form';

interface ILogin {
  username: string;
  password: string;
}
export default function Login() {
  const [values, setValues] = React.useState(false);
  const [errAlert, setErrAlert] = React.useState(false);
  const { control, handleSubmit } = useForm<ILogin>();
  const { login, error, loading, loginDialog, closeDialog } = useAuthContext();

  const handleLogin = (data: ILogin) => {
    login(data);
  };

  const showPwd = () => {
    setValues((prevValue) => !prevValue);
  };
  return (
    <>
      <ErrorDialog
        open={loginDialog}
        onCloseDialog={closeDialog}
        errorTitle='Failed Authentication'
        errorMessage={error?.message || 'Encounter a problem signing in'}
      />

      <Grid container>
        <Grid
          item
          xs={0}
          md={6}
          sx={{
            backgroundImage: `url('/images/login_banner.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
          }}
        ></Grid>
        <Grid item xs={12} md={6} sx={{ height: '100vh' }}>
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
                  src='/images/mongkol_serey_logo_1000.png'
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
                          <CusOutlineInput
                            {...field}
                            error={Boolean(error)}
                            placeholder='Username'
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
                          minLength: 4,
                          required: {
                            message: 'Password is required!',
                            value: true,
                          },
                        }}
                        render={({ field, fieldState: { error } }) => (
                          <CusOutlineInput
                            {...field}
                            error={Boolean(error)}
                            placeholder='Must be at least 6 characters'
                            variant='outlined'
                            fullWidth
                            helperText={!error ? '' : error?.message}
                            type={values ? 'text' : 'password'}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position='end'>
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
                    <LoadingButton
                      variant='contained'
                      color='primary'
                      size='large'
                      type='submit'
                      loading={loading}
                      sx={{
                        boxShadow: 0,
                        borderRadius: 3,
                        height: 56,
                        background: THEME_UTIL.goldGradientMain,
                      }}
                    >
                      Login
                    </LoadingButton>
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
    </>
  );
}
