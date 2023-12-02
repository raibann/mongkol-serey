import {
  InputAdornment,
  Button,
  Avatar,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { SearchNormal1, Add } from 'iconsax-react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export default function FoodMenus() {
  // Hooks
  const { isSmDown } = useResponsive();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <PageHeader pageTitle='Food Menu'>
        <CusTextField
          fullWidth={isSmDown ? true : false}
          placeholder='Search...'
          size='small'
          sx={{ bgcolor: 'common.white', mr: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchNormal1 size={18} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          onClick={() => navigate(ROUTE_PATH.menus.createFood)}
          variant='contained'
          size='small'
          disableElevation
          sx={{
            color: 'common.white',
            minWidth: 0,
          }}
        >
          <Add />
        </Button>
      </PageHeader>

      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          {Array(12)
            .fill(null)
            .map((_, i) => {
              return (
                <Grid key={i} item xs={12} sm={4}>
                  <Stack
                    direction='row'
                    alignItems='center'
                    width='100%'
                    justifyContent='space-between'
                    bgcolor='common.white'
                    p={2}
                    borderRadius={2.5}
                  >
                    <Stack direction='row' spacing={2} alignItems='center'>
                      <Avatar
                        src='/static/images/avatar/1.jpg'
                        variant='rounded'
                        sx={{
                          height: 40,
                          width: 40,
                          borderRadius: 2,
                        }}
                      />

                      <Typography variant='body2'>បាយឆាយ៉ាងចូវ</Typography>
                    </Stack>
                    <CusIconButton
                      sx={{
                        boxShadow: 0,
                        color: theme.palette.text.secondary,
                      }}
                    >
                      <HiDotsHorizontal />
                    </CusIconButton>
                  </Stack>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}
