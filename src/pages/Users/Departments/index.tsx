import {
  Container,
  SxProps,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  useTheme,
} from '@mui/material';
import PageHeader from 'components/PageHeader';
import React from 'react';
import theme from 'theme/theme';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default function Departments() {
  const theme = useTheme();
  return (
    <>
      <PageHeader pageTitle={'Department'}></PageHeader>
      <Container maxWidth='xl'>
        <TableContainer>
          <TableHead>
            <TableRow sx={custStyle.row}>
              <TableCell sx={custStyle.cell}>No.</TableCell>
              <TableCell align='right' sx={custStyle.cell}>
                Department
              </TableCell>
              <TableCell align='right' sx={custStyle.cell}>
                Permissions
              </TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  background: (theme) => theme.palette.common.white,
                  '&> td': {
                    borderBottom: `5px solid ${theme.palette.background.paper}`,
                  },
                  '&> td:first-child': {
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  },
                  '&> td:last-child': {
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  },
                }}
              >
                <TableCell scope='row'>{row.name}</TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Container>
    </>
  );
}
interface ITableStyle {
  row?: SxProps<Theme>;
  cell?: SxProps<Theme>;
}

const custStyle: ITableStyle = {
  row: {
    background: 'transparent',
  },
  cell: {
    fontWeight: (theme) => theme.typography.fontWeightBold,
  },
};
