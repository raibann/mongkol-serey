import {
  Stack,
  Button,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import { Trash } from 'iconsax-react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from 'theme/theme';
import { IOrderForm } from '.';

const OrderItem = ({
  onRemoveOrder,
  index,
}: {
  index: number;
  onRemoveOrder: () => void;
}) => {
  const { control, setValue, watch } = useFormContext<IOrderForm>();
  const menuItems = watch(`listMenu.${index}.menuItem`) || [];

  const addMenuItemHandler = () => {
    if (menuItems.length > 0) {
      setValue(`listMenu.${index}.menuItem`, [
        ...menuItems,
        {
          id: new Date().getTime(),
          title: '',
        },
      ]);
    } else {
      setValue(`listMenu.${index}.menuItem`, [
        {
          id: new Date().getTime(),
          title: '',
        },
      ]);
    }
  };

  const removeMenuItemHandler = (id: number) => {
    const tmp = menuItems.filter((item) => {
      return item.id !== id;
    });
    setValue(`listMenu.${index}.menuItem`, tmp);
  };

  return (
    <>
      <Stack
        mb={2}
        mx={3}
        pb={3}
        sx={{
          background: theme.palette.background.paper,
          borderRadius: 3,
        }}
      >
        <Stack spacing={1} px={2} py={3} position='relative' direction='row'>
          <Button
            color='error'
            onClick={onRemoveOrder}
            sx={{
              position: 'absolute',
              top: 4,
              right: 4,
              fontSize: 12,
            }}
          >
            Remove
          </Button>
          <Controller
            control={control}
            name={`listMenu.${index}.title`}
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='Category'>
                  <StyledOutlinedTextField
                    size='small'
                    placeholder='Title'
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />
          <Controller
            control={control}
            name={`listMenu.${index}.quantity`}
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='Quantity'>
                  <StyledOutlinedTextField
                    size='small'
                    placeholder='Quantity'
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />
          <Controller
            control={control}
            name={`listMenu.${index}.unit`}
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='Unit'>
                  <StyledOutlinedTextField
                    size='small'
                    placeholder='Unit'
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />
          <Controller
            control={control}
            name={`listMenu.${index}.price`}
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='Price'>
                  <StyledOutlinedTextField
                    size='small'
                    placeholder='Price'
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />
        </Stack>

        {menuItems &&
          menuItems.length > 0 &&
          menuItems?.map((item, i) => {
            return (
              <Stack key={item.id} direction='row' spacing={1} px={2} mb={3}>
                <Typography width={20} ml={1}>
                  {i + 1}.
                </Typography>
                <TextField
                  variant='standard'
                  size='small'
                  inputProps={{
                    style: {
                      padding: 0,
                    },
                  }}
                  sx={{
                    flexGrow: 1,
                    outline: 'none',
                    p: 0,
                  }}
                />
                <IconButton
                  color='error'
                  onClick={() => removeMenuItemHandler(item.id)}
                  sx={{ p: 0 }}
                >
                  <Trash />
                </IconButton>
              </Stack>
            );
          })}

        <Button
          variant='outlined'
          onClick={addMenuItemHandler}
          sx={{
            py: 1,
            mr: 2,
            ml: 3,
            borderStyle: 'dashed',
            background: theme.palette.common.white,
          }}
        >
          Add More
        </Button>
      </Stack>
    </>
  );
};

export default OrderItem;
