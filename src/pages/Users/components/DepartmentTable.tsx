import {
  TableRow,
  TableCell,
  Button,
  alpha,
  MenuItem,
  Stack,
  useTheme,
  Menu,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTable, { custStyle } from 'components/CusTable/CusTable';
import { ArrowDown2, Edit2, Trash } from 'iconsax-react';
import React, { useState } from 'react';

const headers = ['No.', 'Department', 'Permissions'];
const bodyRows = [
  {
    id: 1,
    name: 'Admin',
    permissions: [
      {
        id: 1,
        name: 'test',
      },
      {
        id: 2,
        name: 'delete-test',
      },
    ],
  },
];

export default function DepartmentTable() {
  /* State */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  /* Hooks */
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  return (
    <>
      <CusTable
        headers={headers}
        body={bodyRows.map((value) => {
          return (
            <TableRow key={value.id} sx={custStyle.bodyRow}>
              <TableCell>{value.id}</TableCell>
              <TableCell
                align='left'
                sx={{
                  fontWeight: (theme) => theme.typography.fontWeightBold,
                }}
              >
                {value.name}
              </TableCell>
              <TableCell align='left'>
                <Button
                  sx={{
                    background: (theme) => alpha(theme.palette.info.main, 0.1),
                    color: (theme) => theme.palette.info.main,
                  }}
                  onClick={handleClick}
                  variant='text'
                  endIcon={
                    <ArrowDown2 size='16' color={theme.palette.info.main} />
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
                  {value.permissions.map((per) => {
                    return (
                      <MenuItem key={per.id} onClick={handleClose}>
                        {per.name}
                      </MenuItem>
                    );
                  })}
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
          );
        })}
      />
    </>
  );
}
