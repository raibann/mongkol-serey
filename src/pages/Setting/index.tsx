import { Container, Paper } from '@mui/material';
import CompanyDetail from './pages/CompanyDetail';
import PageHeader from 'components/PageHeader';

const Setting = () => {
  return (
    <>
      <PageHeader pageTitle='Update Company Profile' />
      <Paper
        sx={{
          m: 3,
          mt: 0,
          p: 2,
        }}
      >
        <Container maxWidth='sm'>
          <CompanyDetail />
        </Container>
      </Paper>
    </>
  );
};

export default Setting;
