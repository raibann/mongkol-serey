import { Stack, InputAdornment, MenuItem, Autocomplete } from '@mui/material';
import CusOutlineInput from 'components/CusTextField/CusOutlineInput';
import LabelTextField from 'components/LabelTextField';
import { Facebook } from 'iconsax-react';
import { Controller, useFormContext } from 'react-hook-form';
import { BsTelegram } from 'react-icons/bs';
import theme from 'theme/theme';
import provincesJson from 'geography/Provinces.json';
import districtJson from 'geography/District.json';
import communeJson from 'geography/Communes.json';
import useResponsive from 'hook/useResponsive';
import { validatePatterns } from 'utils/validate-util';
import { useEffect, useState } from 'react';

export type CustomerInput = {
  customerId?: number | '';
  customerName: string;
  facebook: string;
  telegram: string;
  contact: string;
  houseNo: string;
  stNo: string;
  location: string;
  province: string;
  district: string;
  commune: string;
};

const provincesList: Province.IProvince[] = provincesJson;
const districtList: District.IDistrict[] = districtJson;
const communeList: Commune.ICommune[] = communeJson;

const CustomerForm = () => {
  const { control, watch, setValue } = useFormContext<CustomerInput>();
  const { isSmDown } = useResponsive();
  const province = watch('province');
  const district = watch('district');

  const [selectedPrinvince, setSelectedProvince] =
    useState<Province.IProvince>();
  const [selectedDistrict, setSelectedDistrict] =
    useState<District.IDistrict>();

  useEffect(() => {
    if (province) {
      setSelectedProvince(() => {
        const tmpProvince = provincesList.find(
          (e) => e.full_name_km === province
        );
        return tmpProvince;
      });
    }

    if (district) {
      setSelectedDistrict(() => {
        const tmpDistrict = districtList.find(
          (e) => e.full_name_km === district
        );
        return tmpDistrict;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Stack spacing={4} px={3}>
        <Stack direction={isSmDown ? 'column' : 'row'} spacing={4}>
          <Controller
            control={control}
            name='customerName'
            defaultValue=''
            rules={{
              required: { value: true, message: 'Customer Name is Required' },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Customer Name'>
                  <CusOutlineInput
                    placeholder='Enter Customer Name'
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
            name='contact'
            defaultValue=''
            rules={{
              required: { value: true, message: 'Contact Number is Required' },
              pattern: {
                value: validatePatterns.numberOnly,
                message: 'Required only number',
              },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <LabelTextField label='Contact Number'>
                  <CusOutlineInput
                    placeholder='Enter Contact Number'
                    error={Boolean(error)}
                    helperText={error?.message}
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />
        </Stack>
        <Stack direction={isSmDown ? 'column' : 'row'} spacing={4}>
          <Controller
            control={control}
            name='facebook'
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='Facebook'>
                  <CusOutlineInput
                    placeholder='Facebook'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Facebook
                            variant='Bold'
                            color={theme.palette.primary.main}
                          />
                        </InputAdornment>
                      ),
                    }}
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />

          <Controller
            control={control}
            name='telegram'
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='Telegram'>
                  <CusOutlineInput
                    placeholder='Telegram'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <BsTelegram
                            color={theme.palette.primary.main}
                            size={24}
                          />
                        </InputAdornment>
                      ),
                    }}
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />
        </Stack>
        <Stack direction={isSmDown ? 'column' : 'row'} spacing={4}>
          <Controller
            control={control}
            name='houseNo'
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='House Number'>
                  <CusOutlineInput
                    placeholder='Enter House Number'
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />

          <Controller
            control={control}
            name='stNo'
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='Street Number'>
                  <CusOutlineInput
                    placeholder='Enter Street Number'
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />
        </Stack>

        <Stack direction={isSmDown ? 'column' : 'row'} spacing={4}>
          <Controller
            control={control}
            name='province'
            defaultValue=''
            rules={{
              required: { value: true, message: 'Province is Required' },
            }}
            render={({
              field: { onChange, ...rest },
              fieldState: { error },
            }) => {
              return (
                <LabelTextField label='Province'>
                  <Autocomplete
                    freeSolo
                    disableClearable
                    openOnFocus
                    id='province'
                    options={provincesList}
                    onChange={(_, val) => {
                      setSelectedProvince(val as Province.IProvince);
                    }}
                    onInputChange={(_, val) => {
                      setValue('province', val);
                    }}
                    getOptionLabel={(option) =>
                      (option as Province.IProvince).full_name_km ||
                      option.toString() ||
                      ''
                    }
                    renderOption={(props, option) => (
                      <MenuItem key={option.id} {...props}>
                        {option.full_name_km}
                      </MenuItem>
                    )}
                    renderInput={(params) => (
                      <CusOutlineInput
                        placeholder='Enter Province'
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: 'search',
                        }}
                      />
                    )}
                    {...rest}
                  />
                </LabelTextField>
              );
            }}
          />

          <Controller
            control={control}
            name='district'
            defaultValue=''
            rules={{
              required: { value: true, message: 'District is Required' },
            }}
            render={({
              field: { onChange, ...rest },
              fieldState: { error },
            }) => {
              return (
                <LabelTextField label='District'>
                  <Autocomplete
                    freeSolo
                    disableClearable
                    openOnFocus
                    id='district'
                    options={districtList.filter(
                      (option) =>
                        option.province_id === selectedPrinvince?.id || ''
                    )}
                    getOptionLabel={(option) =>
                      (option as District.IDistrict)?.full_name_km ||
                      option.toString() ||
                      ''
                    }
                    renderOption={(props, option) => (
                      <MenuItem key={option.id} {...props}>
                        {option.full_name_km}
                      </MenuItem>
                    )}
                    onChange={(_, val) =>
                      setSelectedDistrict(val as District.IDistrict)
                    }
                    onInputChange={(_, val) => {
                      setValue('district', val);
                    }}
                    renderInput={(params) => (
                      <CusOutlineInput
                        placeholder='Enter District'
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: 'search',
                        }}
                      />
                    )}
                    {...rest}
                  />
                </LabelTextField>
              );
            }}
          />
        </Stack>

        <Stack direction={isSmDown ? 'column' : 'row'} spacing={4}>
          <Controller
            control={control}
            name='commune'
            defaultValue=''
            rules={{
              required: { value: true, message: 'Commune is Required' },
            }}
            render={({
              field: { onChange, ...rest },
              fieldState: { error },
            }) => {
              return (
                <LabelTextField label='Commune'>
                  <Autocomplete
                    freeSolo
                    disableClearable
                    openOnFocus
                    id='commune'
                    options={communeList.filter(
                      (option) =>
                        option.district_id === selectedDistrict?.id || ''
                    )}
                    onInputChange={(_, val) => {
                      setValue('commune', val);
                    }}
                    getOptionLabel={(option) =>
                      (option as Commune.ICommune)?.full_name_km ||
                      option.toString() ||
                      ''
                    }
                    renderOption={(props, option) => (
                      <MenuItem key={option.id} {...props}>
                        {option.full_name_km}
                      </MenuItem>
                    )}
                    renderInput={(params) => (
                      <CusOutlineInput
                        placeholder='Enter Commune'
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: 'search',
                        }}
                      />
                    )}
                    {...rest}
                  />
                </LabelTextField>
              );
            }}
          />
          <Controller
            control={control}
            name='location'
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='Location'>
                  <CusOutlineInput placeholder='Enter Location' {...field} />
                </LabelTextField>
              );
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default CustomerForm;
