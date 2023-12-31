import {
  Stack,
  Button,
  Typography,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Autocomplete,
  alpha,
} from '@mui/material';
import { Result } from 'ahooks/lib/useRequest/src/types';
import CusOutlineInput from 'components/CusTextField/CusOutlineInput';
import LabelTextField from 'components/LabelTextField';
import { Trash } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from 'theme/theme';
import { unitList } from 'utils/data-util';
import { validatePatterns } from 'utils/validate-util';
import { IOrderForm } from '.';

interface IMenuItems {
  id?: number;
  title: string;
}

const OrderItem = ({
  menuListReq,
  menuItemsP,
  index,
  onRemoveOrder,
}: {
  menuListReq: Result<
    {
      resMenu: IMenu.IMenuItem[];
      resCategory: IMenu.IMenuCategory[];
    },
    []
  >;
  menuItemsP: IMenuItems[];
  index: number;
  onRemoveOrder: () => void;
}) => {
  const { control, setValue, watch } = useFormContext<IOrderForm>();
  const unitPrice = watch(`listMenu.${index}.unitPrice`);
  const quantity = watch(`listMenu.${index}.quantity`);
  const price = watch(`listMenu.${index}.price`);
  const { resCategory, resMenu } = menuListReq.data || {};

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
    if (menuItemsP) {
      return setMenuItems(menuItemsP);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const tmp = watch(`listMenu.${index}.menuItem`);
    tmp.splice(i, 1);
    setMenuItems([...tmp]);
    setValue(`listMenu.${index}.menuItem`, [...tmp]);
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
        <Stack
          spacing={1}
          px={2}
          py={3}
          position='relative'
          direction={{ xs: 'column', md: 'row' }}
        >
          <Button
            color='error'
            onClick={onRemoveOrder}
            sx={{
              position: 'absolute',
              top: 4,
              right: 8,
              fontSize: 12,
              textTransform: 'capitalize',
              p: 0,
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
            render={({
              field: { onChange, ...rest },
              fieldState: { error },
            }) => {
              return (
                <LabelTextField label=''>
                  <Autocomplete
                    componentsProps={{
                      paper: {
                        sx: {
                          minWidth: 250,
                        },
                      },
                    }}
                    freeSolo
                    disableClearable
                    openOnFocus
                    loading={menuListReq.loading}
                    loadingText='Loading...'
                    id='categoryList'
                    size='small'
                    sx={{ width: '100%' }}
                    onInputChange={(e, value) => {
                      setValue(`listMenu.${index}.title`, value);
                    }}
                    {...rest}
                    renderInput={(params) => (
                      <CusOutlineInput
                        label='Category'
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...params}
                      />
                    )}
                    options={resCategory?.map((data) => data.title) || []}
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
                <LabelTextField label=''>
                  <Stack
                    direction='row'
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <CusOutlineInput
                      size='small'
                      type='number'
                      label='Quantity'
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
                      {watch(`listMenu.${index}.unit`) || 'តុ'}
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
              );
            }}
          />

          <LabelTextField label=''>
            <Controller
              control={control}
              name={`listMenu.${index}.unitPrice`}
              defaultValue=''
              render={({ field, fieldState: { error } }) => {
                return (
                  <CusOutlineInput
                    size='small'
                    type='number'
                    label='Price'
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
                <LabelTextField label=''>
                  <CusOutlineInput
                    size='small'
                    type='number'
                    label='Total Price'
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
                        loading={menuListReq.loading}
                        loadingText='Loading...'
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
                        options={resMenu?.map((data) => data.title) || []}
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
            background: alpha(theme.palette.primary.light, 0.1),
            borderRadius: 2,
          }}
        >
          Add More
        </Button>
      </Stack>
    </>
  );
};

export default OrderItem;
