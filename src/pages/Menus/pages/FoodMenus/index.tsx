import {
  InputAdornment,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  Stack,
  Tooltip,
} from '@mui/material';
import { useRequest } from 'ahooks';
import MENU_API from 'api/menu';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useError from 'hook/useError';
import useResponsive from 'hook/useResponsive';
import { SearchNormal1, Add, Edit, Trash } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export default function FoodMenus() {
  // Hooks
  const { isSmDown } = useResponsive();
  const navigate = useNavigate();
  const theme = useTheme();
  const { errorState, setErorrState } = useError();

  const { data: resListFoods } = useRequest(MENU_API.getListFoods, {
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
          {resListFoods?.map((food, i) => {
            return (
              <Grid key={food.id} item xs={12} sm={3}>
                <Card>
                  <CardMedia
                    component='img'
                    alt='green iguana'
                    height='160'
                    sx={{ aspectRatio: '4 / 3' }}
                    image='https://api.telegram.org/file/bot5683327648:AAForuzEywsdCCXFlR04En_Gl7pD34poVl4/documents/file_39.jpg'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {food.name}
                    </Typography>
                    <Tooltip title={food.description} arrow>
                      <Typography
                        variant='body2'
                        noWrap
                        color='text.secondary'
                        overflow={'hidden'}
                        textOverflow={'ellipsis'}
                        sx={{ cursor: 'pointer' }}
                      >
                        {food.description}
                      </Typography>
                    </Tooltip>
                  </CardContent>
                  <CardActions>
                    <Stack direction={'row'} spacing={2}>
                      <CusIconButton
                        size='small'
                        sx={{ textTransform: 'capitalize' }}
                      >
                        <Edit size='24' color={theme.palette.info.main} />
                      </CusIconButton>

                      <CusIconButton
                        size='small'
                        sx={{ textTransform: 'capitalize' }}
                      >
                        <Trash size='24' color={theme.palette.error.main} />
                      </CusIconButton>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
