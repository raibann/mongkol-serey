import {
  Button,
  Container,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  alpha,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, ArrowDown2, Edit2, SearchNormal1, Trash } from 'iconsax-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export default function Departments() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
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
        <TableContainer>
          <Table
            sx={{
              minWidth: '100%',
              borderCollapse: 'separate',
              borderSpacing: `0px 12px`,
            }}
          >
            <TableHead>
              <TableRow sx={custStyle.row}>
                <TableCell sx={custStyle.cell}>No.</TableCell>
                <TableCell align='left' sx={custStyle.cell}>
                  Department
                </TableCell>
                <TableCell align='left' sx={custStyle.cell}>
                  Permissions
                </TableCell>
                <TableCell align='right'></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array(3)
                .fill('')
                .map((_, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      background: (theme) => theme.palette.common.white,
                      '&> td:first-of-type': {
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',
                      },
                      '&> td:last-child': {
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                      },
                    }}
                  >
                    <TableCell>{i + 1}</TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: (theme) => theme.typography.fontWeightBold,
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell align='left'>
                      <Button
                        sx={{
                          background: (theme) =>
                            alpha(theme.palette.info.main, 0.1),
                          color: (theme) => theme.palette.info.main,
                        }}
                        onClick={handleClick}
                        variant='text'
                        endIcon={
                          <ArrowDown2
                            size='16'
                            color={theme.palette.info.main}
                          />
                        }
                      >
                        Test
                      </Button>
                      <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                        sx={{
                          '&> .css-1ctw77z-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper':
                            {
                              boxShadow: (theme) => theme.shadows[1],
                            },
                        }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Menu>
                    </TableCell>
                    <TableCell align='right'>
                      <Stack
                        direction={'row'}
                        spacing={2}
                        alignItems={'center'}
                        justifyContent={'end'}
                      >
                        <CusIconButton
                          sx={{
                            boxShadow: 0,
                            background: (theme) =>
                              alpha(theme.palette.info.main, 0.1),
                          }}
                        >
                          <Edit2
                            size='20'
                            color={theme.palette.info.main}
                            variant='Bold'
                          />
                        </CusIconButton>
                        <CusIconButton
                          sx={{
                            boxShadow: 0,
                            background: (theme) =>
                              alpha(theme.palette.error.main, 0.1),
                          }}
                        >
                          <Trash
                            size='20'
                            color={theme.palette.error.main}
                            variant='Bold'
                          />
                        </CusIconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
export interface ITableStyle {
  row?: SxProps<Theme>;
  cell?: SxProps<Theme>;
}

const custStyle: ITableStyle = {
  row: {
    background: 'transparent',
    '&> th': {
      pt: 0,
    },
  },
  cell: {
    fontWeight: (theme) => theme.typography.fontWeightBold,
  },
};
