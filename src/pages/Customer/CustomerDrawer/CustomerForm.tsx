import { Stack, InputAdornment, MenuItem, Autocomplete } from '@mui/material';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import { Facebook } from 'iconsax-react';
import { Controller, useFormContext } from 'react-hook-form';
import { BsTelegram } from 'react-icons/bs';
import theme from 'theme/theme';
import provincesJson from 'geography/Provinces.json';
import districtJson from 'geography/District.json';
import communeJson from 'geography/Communes.json';

export type CustomerInput = {
  id: number;
  customerName: string;
  facebook: string;
  telegram: string;
  contact: string;
  houseNo: string;
  stNo: string;
  location: string;
  province: Province.IProvince | string;
  district: District.IDistrict | string;
  commune: Commune.ICommune | string;
};

const provincesList: Province.IProvince[] = provincesJson;
const districtList: District.IDistrict[] = districtJson;
const communeList: Commune.ICommune[] = communeJson;

const CustomerForm = () => {
  const { control, setValue, watch } = useFormContext<CustomerInput>();

  return (
    <>
      <Stack spacing={4} px={3}>
        <Stack direction='row' spacing={4}>
          <Controller
            control={control}
            name='facebook'
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='Facebook'>
                  <StyledOutlinedTextField
                    placeholder='Enter Facebook'
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
                  <StyledOutlinedTextField
                    placeholder='Enter Telegram'
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

        <Stack direction='row' spacing={4}>
          <Controller
            control={control}
            name='customerName'
            defaultValue=''
            rules={{
              required: { value: true, message: 'Customer Name is Required' },
            }}
            render={({ field }) => {
              return (
                <LabelTextField label='Customer Name'>
                  <StyledOutlinedTextField
                    placeholder='Enter Customer Name'
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
            }}
            render={({ field }) => {
              return (
                <LabelTextField label='Contact Number'>
                  <StyledOutlinedTextField
                    placeholder='Enter Contact Number'
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />
        </Stack>

        <Stack direction='row' spacing={4}>
          <Controller
            control={control}
            name='houseNo'
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='House Number'>
                  <StyledOutlinedTextField
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
                  <StyledOutlinedTextField
                    placeholder='Enter Street Number'
                    {...field}
                  />
                </LabelTextField>
              );
            }}
          />
        </Stack>

        <Stack direction='row' spacing={4}>
          <Controller
            control={control}
            name='province'
            defaultValue=''
            render={({ field: { onChange, value, ...rest } }) => {
              return (
                <LabelTextField label='Province'>
                  <Autocomplete
                    freeSolo
                    disableClearable
                    openOnFocus
                    id='province'
                    options={provincesList}
                    onChange={(e, val) => {
                      setValue('province', val as Province.IProvince);
                    }}
                    onInputChange={(e, val) => {
                      setValue('province', val);
                    }}
                    getOptionLabel={(option) =>
                      (option as Province.IProvince).full_name_km || ''
                    }
                    renderOption={(props, option) => (
                      <MenuItem key={option.id} {...props}>
                        {option.full_name_km}
                      </MenuItem>
                    )}
                    renderInput={(params) => (
                      <StyledOutlinedTextField
                        placeholder='Enter Province'
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
            render={({ field: { onChange, value, ...rest } }) => {
              return (
                <LabelTextField label='District'>
                  <Autocomplete
                    freeSolo
                    disableClearable
                    openOnFocus
                    id='district'
                    options={districtList.filter(
                      (option) =>
                        option.province_id ===
                          (watch('province') as Province.IProvince)?.id || ''
                    )}
                    getOptionLabel={(option) =>
                      (option as District.IDistrict).full_name_km || ''
                    }
                    renderOption={(props, option) => (
                      <MenuItem key={option.id} {...props}>
                        {option.full_name_km}
                      </MenuItem>
                    )}
                    onChange={(e, val) =>
                      setValue('district', val as District.IDistrict)
                    }
                    onInputChange={(e, val) => {
                      setValue('district', val);
                    }}
                    renderInput={(params) => (
                      <StyledOutlinedTextField
                        placeholder='Enter District'
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

        <Stack direction='row' spacing={4}>
          <Controller
            control={control}
            name='commune'
            defaultValue=''
            render={({ field: { onChange, value, ...rest } }) => {
              return (
                <LabelTextField label='Commune'>
                  <Autocomplete
                    freeSolo
                    disableClearable
                    openOnFocus
                    id='commune'
                    options={communeList.filter(
                      (option) =>
                        option.district_id ===
                          (watch('district') as District.IDistrict)?.id || ''
                    )}
                    onChange={(e, val) => {
                      setValue('commune', val as Commune.ICommune);
                    }}
                    onInputChange={(e, val) => {
                      setValue('commune', val);
                    }}
                    getOptionLabel={(option) =>
                      (option as Commune.ICommune).full_name_km || ''
                    }
                    renderOption={(props, option) => (
                      <MenuItem key={option.id} {...props}>
                        {option.full_name_km}
                      </MenuItem>
                    )}
                    renderInput={(params) => (
                      <StyledOutlinedTextField
                        placeholder='Enter Commune'
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
                  <StyledOutlinedTextField
                    placeholder='Enter Location'
                    {...field}
                  />
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
