import { Grid, Stack, Typography, MenuItem, Menu } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Edit2, Trash } from 'iconsax-react';
import { useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import theme from 'theme/theme';

const payment: { name: string; color: string }[] = [
  {
    name: 'ACLEDA',
    color: '#143c6d',
  },
  {
    name: 'ABA',
    color: '#005b7a',
  },
  {
    name: 'WING',
    color: '#a4c535',
  },
  {
    name: ' BAKONG',
    color: '#dc222c',
  },
  {
    name: 'CANADIA',
    color: '#D61229',
  },
  {
    name: 'Cash',
    color: '#BB9300',
  },
];

export default function CustomizePaymentTable() {
  // States
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <Grid container spacing={2}>
      {payment.map((data, i) => {
        return (
          <Grid key={i} item xs={12} sm={3}>
            <Stack
              bgcolor={data.color}
              p={2}
              borderRadius={2.5}
              direction={'row'}
              alignItems={'center'}
              width={'100%'}
              justifyContent={'space-between'}
            >
              <Stack direction={'row'} spacing={2} alignItems='center'>
                <Stack direction={'column'}>
                  <Typography
                    variant='body1'
                    noWrap
                    overflow={'hidden'}
                    textOverflow={'ellipsis'}
                    width={92}
                    display={'inline-block'}
                    color={'white'}
                    fontWeight={'bold'}
                  >
                    {data.name}
                  </Typography>
                </Stack>
              </Stack>
              <CusIconButton
                sx={{
                  boxShadow: 0,
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                <HiDotsHorizontal />
              </CusIconButton>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={false}
                onClose={() => {}}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                elevation={1}
              >
                <MenuItem>
                  <Edit2
                    size='18'
                    color={theme.palette.info.main}
                    style={{ marginRight: 8 }}
                    variant='Bold'
                  />
                  Edit
                </MenuItem>

                <MenuItem>
                  <Trash
                    variant='Bold'
                    size='18'
                    color={theme.palette.error.main}
                    style={{ marginRight: 8 }}
                  />
                  Delete
                </MenuItem>
              </Menu>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
}
