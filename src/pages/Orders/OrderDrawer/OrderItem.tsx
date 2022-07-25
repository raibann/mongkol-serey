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
import { useState } from 'react';
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
  const { control } = useFormContext<IOrderForm>();
  const [menuItems, setMenuItems] = useState<
    {
      id: number;
      title: string;
    }[]
  >([]);

  const addMenuItemHandler = () => {
    if (menuItems.length > 0) {
      setMenuItems([
        ...menuItems,
        {
          id: new Date().getTime(),
          title: '',
        },
      ]);
    } else {
      setMenuItems([
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
    setMenuItems(tmp);
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
            rules={{
              required: { value: true, message: 'Title is Required' },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Category'>
                  <StyledOutlinedTextField
                    size='small'
                    placeholder='Title'
                    error={Boolean(error)}
                    helperText={error?.message}
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
            rules={{
              required: { value: true, message: 'Quantity is Required' },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Quantity'>
                  <StyledOutlinedTextField
                    size='small'
                    placeholder='Quantity'
                    error={Boolean(error)}
                    helperText={error?.message}
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
            rules={{
              required: { value: true, message: 'Unit is Required' },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Unit'>
                  <StyledOutlinedTextField
                    size='small'
                    placeholder='Unit'
                    error={Boolean(error)}
                    helperText={error?.message}
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
            rules={{
              required: { value: true, message: 'Price is Required' },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Price'>
                  <StyledOutlinedTextField
                    size='small'
                    placeholder='Price'
                    error={Boolean(error)}
                    helperText={error?.message}
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
              <Stack
                key={item.id}
                direction='row'
                alignItems='flex-start'
                spacing={1}
                px={2}
                mb={3}
              >
                <Typography width={20} ml={1}>
                  {i + 1}.
                </Typography>
                <Controller
                  control={control}
                  name={`listMenu.${index}.menuItem.${i}.title`}
                  defaultValue=''
                  rules={{
                    required: { value: true, message: 'Item is Required' },
                  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
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
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...field}
                      />
                    );
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
