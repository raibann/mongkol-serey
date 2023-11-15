import { Button, Container, InputAdornment } from '@mui/material';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, SearchNormal1 } from 'iconsax-react';
import DepartmentTable from 'pages/Users/components/DepartmentTable';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export default function Departments() {
  /* Hooks */
  const navigate = useNavigate();
  const { isSmDown } = useResponsive();
  return (
    <>
      <PageHeader pageTitle={'Department'}>
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
          onClick={() => navigate(ROUTE_PATH.users.createNewDepartment)}
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
        <DepartmentTable />
      </Container>
    </>
  );
}
