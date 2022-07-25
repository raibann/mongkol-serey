import { Paper, Stack, Typography, Avatar, Box } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Add, Edit, InfoCircle } from 'iconsax-react';
import { ICustCard } from '..';

const CustCard = ({
  handleOpenDrawer,
  CustCardData,
  setSelectedData,
}: {
  handleOpenDrawer: (obj: 'Add' | 'Edit' | 'Details' | '') => void;
  CustCardData: ICustCard[];
  setSelectedData: React.Dispatch<React.SetStateAction<ICustCard[]>>;
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: 2.5,
          columnGap: 2.8,
        }}
      >
        {CustCardData.map((data) => (
          <Paper sx={{ width: 200, py: 2 }} key={data.id}>
            <Stack direction={'column'} alignItems='center' spacing={1.5}>
              <Avatar
                src='/images/avatar.svg'
                sx={{ width: 100, height: 'auto' }}
              />
              <Stack alignItems={'center'}>
                <Typography variant='h6'>{data.customerName}</Typography>
                <Typography
                  variant='caption'
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Ordered: {data.ordered} times
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <CusIconButton color='primary'>
                  <Add variant='Outline' />
                </CusIconButton>
                <CusIconButton
                  color='info'
                  onClick={() => handleOpenDrawer('Edit')}
                >
                  <Edit variant='Outline' />
                </CusIconButton>
                <CusIconButton
                  color='success'
                  onClick={(e) => {
                    handleOpenDrawer('Details');
                    if (e.target) {
                      let temp = CustCardData.filter((el) => el.id === data.id);
                      setSelectedData(temp);
                    } else {
                      setSelectedData(CustCardData);
                    }
                  }}
                >
                  <InfoCircle variant='Outline' />
                </CusIconButton>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default CustCard;
