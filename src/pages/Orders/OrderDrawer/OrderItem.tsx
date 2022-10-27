import {
  Stack,
  Button,
  Typography,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Autocomplete,
} from '@mui/material';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import { Trash } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from 'theme/theme';
import { foodList, unitList } from 'utils/data-util';
import { validatePatterns } from 'utils/validate-util';
import { IOrderForm } from '.';

interface IMenuItems {
  id?: number;
  title: string;
}

const OrderItem = ({
  menuItemsP,
  onRemoveOrder,
  index,
}: {
  menuItemsP: IMenuItems[];
  index: number;
  onRemoveOrder: () => void;
}) => {
  const { control, setValue, watch } = useFormContext<IOrderForm>();
  const unitPrice = watch(`listMenu.${index}.unitPrice`);
  const quantity = watch(`listMenu.${index}.quantity`);
  const price = watch(`listMenu.${index}.price`);

  const [menuItems, setMenuItems] = useState<IMenuItems[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // setValue(`listMenu.${index}.unit`, 'តុ');

    if (menuItemsP) {
      return setMenuItems(menuItemsP);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (unitPrice && quantity) {
  //     if (!isNaN(+unitPrice * quantity)) {
  //       setValue(
  //         `listMenu.${index}.price`,
  //         +(+unitPrice * quantity).toFixed(2)
  //       );
  //     } else {
  //       setValue(`listMenu.${index}.price`, '');
  //     }
  //   } else {
  //     setValue(`listMenu.${index}.price`, '');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [unitPrice, quantity]);

  const addMenuItemHandler = () => {
    setMenuItems([
      ...menuItems,
      {
        id: undefined,
        title: '',
      },
    ]);
  };

  const removeMenuItemHandler = (i: number) => {
    const tmp = watch(`listMenu.${index}.menuItem`).filter((_, idx) => {
      return idx !== i;
    });
    setMenuItems(tmp);
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
              pattern: {
                value: validatePatterns.numberOnly,
                message: 'Quantity should be number only',
              },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Quantity'>
                  <StyledOutlinedTextField
                    size='small'
                    placeholder='Quantity'
                    error={Boolean(error)}
                    helperText={error?.message}
                    onKeyUp={() => {
                      if (unitPrice && quantity) {
                        if (!isNaN(+unitPrice * quantity)) {
                          setValue(
                            `listMenu.${index}.price`,
                            +(+unitPrice * quantity).toFixed(2)
                          );
                        } else {
                          setValue(`listMenu.${index}.price`, '');
                        }
                      } else {
                        setValue(`listMenu.${index}.price`, 0);
                      }
                    }}
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />

          <LabelTextField label='Unit Price'>
            <Stack
              direction='row'
              sx={{
                position: 'relative',
              }}
            >
              <Controller
                control={control}
                name={`listMenu.${index}.unitPrice`}
                defaultValue=''
                render={({ field, fieldState: { error } }) => {
                  return (
                    <StyledOutlinedTextField
                      size='small'
                      placeholder='Price'
                      error={Boolean(error)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        if (unitPrice && quantity) {
                          if (!isNaN(+unitPrice * quantity)) {
                            setValue(
                              `listMenu.${index}.price`,
                              +(+unitPrice * quantity).toFixed(2)
                            );
                          } else {
                            setValue(`listMenu.${index}.price`, '');
                          }
                        } else {
                          setValue(`listMenu.${index}.price`, '');
                        }
                      }}
                      {...field}
                    />
                  );
                }}
              />
              <Button
                onClick={handleClick}
                color='inherit'
                sx={{
                  background: '#fff',
                  position: 'absolute',
                  right: 2,
                  top: 2,
                  bottom: 2,
                  borderRadius: 2,
                  color: '#000',
                  width: 'auto',
                  minWidth: 0,
                  px: 1,
                  '&.css-1lskwbk-MuiButtonBase-root-MuiButton-root': {
                    p: 0,
                  },
                }}
              >
                /{watch(`listMenu.${index}.unit`) || 'តុ'}
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {unitList.map((e) => {
                  return (
                    <MenuItem
                      key={e}
                      onClick={() => {
                        setValue(`listMenu.${index}.unit`, e);
                        handleClose();
                      }}
                    >
                      {e}
                    </MenuItem>
                  );
                })}
              </Menu>
            </Stack>
          </LabelTextField>

          <Controller
            control={control}
            name={`listMenu.${index}.price`}
            defaultValue=''
            rules={{
              required: { value: true, message: 'Total Price is Required' },
              pattern: {
                value: validatePatterns.numberOnly,
                message: 'Price should be number only',
              },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Total Price'>
                  <StyledOutlinedTextField
                    size='small'
                    placeholder='Total Price'
                    error={Boolean(error)}
                    helperText={error?.message}
                    onKeyUp={() => {
                      if (price && quantity) {
                        if (!isNaN(+price / quantity)) {
                          setValue(
                            `listMenu.${index}.unitPrice`,
                            +(+price / quantity).toFixed(2)
                          );
                        } else {
                          setValue(`listMenu.${index}.unitPrice`, '');
                        }
                      } else {
                        setValue(`listMenu.${index}.unitPrice`, '');
                      }
                    }}
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />
        </Stack>

        {menuItems &&
          menuItems.length > 0 &&
          menuItems?.map((_, i) => {
            return (
              <Stack
                key={i}
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
                  render={({
                    field: { onChange, ...rest },
                    fieldState: { error },
                  }) => {
                    return (
                      <Autocomplete
                        freeSolo
                        disableClearable
                        openOnFocus
                        id='foodList'
                        size='small'
                        sx={{ width: '100%' }}
                        onInputChange={(e, value) => {
                          setValue(
                            `listMenu.${index}.menuItem.${i}.title`,
                            value
                          );
                        }}
                        {...rest}
                        renderInput={(params) => (
                          <TextField
                            variant='standard'
                            sx={{
                              flexGrow: 1,
                              outline: 'none',
                              p: 0,
                            }}
                            error={Boolean(error)}
                            helperText={error?.message}
                            {...params}
                          />
                        )}
                        options={foodList.map((data) => data)}
                      />
                    );
                  }}
                />

                <IconButton
                  color='error'
                  onClick={() => removeMenuItemHandler(i)}
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
