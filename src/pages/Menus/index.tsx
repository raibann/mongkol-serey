import { Button, Container, Grid, InputAdornment } from '@mui/material';
import PageHeader from 'components/PageHeader';
import MenuCard from './components/MenuCard';
import CusTextField from 'components/CusTextField';
import { Add, SearchNormal1 } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import { useRequest } from 'ahooks';
import useError from 'hook/useError';
import MENU_API from 'api/menu';
import ErrorDialog from 'components/CusDialog/ErrorDialog';

export default function Menus() {
  const navigate = useNavigate();
  const { errorState, setErorrState } = useError();

  const { data: resListMenu } = useRequest(MENU_API.getListMenu, {
    manual: false,
    onError: (e: Error) =>
      setErorrState({
        error: !errorState.error,
        message: e.message,
      }),
    refreshOnWindowFocus: true,
  });
  return (
    <>
      <ErrorDialog
        open={errorState.error}
        onCloseDialog={() => {
          setErorrState({
            error: !errorState.error,
            message: errorState.message,
          });
        }}
        errorMessage={errorState.message}
      />
      <PageHeader pageTitle='Menu'>
        <CusTextField
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
          onClick={() => navigate(ROUTE_PATH.menus.createMenuPackage)}
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
        <Grid container spacing={3}>
          {resListMenu?.map((menu, i) => (
            <Grid key={menu.id} item xs={3}>
              <MenuCard menu={menu} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
