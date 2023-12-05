import {
  Avatar,
  Button,
  Grid,
  Portal,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import { Trash } from 'iconsax-react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { IOrderForm } from '..';

type PackageItemProps = {
  index: number;
};

const PackageItem = ({ index }: PackageItemProps) => {
  const theme = useTheme();

  const { control } = useFormContext<IOrderForm>();
  const menuItemFields = useFieldArray({
    control,
    name: `listMenu.${index}.menuItem`,
  });

  return (
    <>
      <Portal
        container={() => document.getElementById(`append-item-button-${index}`)}
      >
        <Button
          variant='text'
          size='small'
          sx={{ textTransform: 'none' }}
          onClick={() => menuItemFields.append({ title: '' })}
        >
          Add
        </Button>
      </Portal>

      {menuItemFields.fields.map((e, i) => (
        <Grid container alignItems='flex-end' columnGap={2} mb={2}>
          <Grid item xs='auto'>
            <Typography variant='body2'>{i + 1}.</Typography>
          </Grid>
          <Grid item xs='auto'>
            <Avatar variant='rounded' sx={{ width: 40, height: 40 }}>
              M
            </Avatar>
          </Grid>
          <Grid item xs>
            <CusTextField
              variant='standard'
              size='small'
              placeholder='Item title'
              fullWidth
            />
          </Grid>
          <Grid item xs='auto'>
            <CusIconButton
              onClick={() => menuItemFields.remove(i)}
              sx={{
                width: 40,
                height: 40,
                boxShadow: 0,
                background: alpha(theme.palette.error.main, 0.1),
              }}
            >
              <Trash
                size='20'
                color={theme.palette.error.main}
                variant='Bold'
              />
            </CusIconButton>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default PackageItem;
