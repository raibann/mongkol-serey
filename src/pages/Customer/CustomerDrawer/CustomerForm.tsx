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
import villageJson from 'geography/Villages.json';

export type CustomerInput = {
  customerName: string;
  facebook: string;
  telegram: string;
  contact: string;
  gender: string;
  houseNo: string;
  stNo: string;
  location: string;
  province: Province.IProvince | string;
  district: District.IDistrict | string;
  commune: Commune.ICommune | string;
  village: Village.IVillage | string;
};

const provincesList: Province.IProvince[] = provincesJson;
const districtList: District.IDistrict[] = districtJson;
const communeList: Commune.ICommune[] = communeJson;
const villageList = villageJson;

const CustomerForm = () => {
  const { control, setValue, watch } = useFormContext<CustomerInput>();

  return (
    <>
      <Stack spacing={2}>
        <Stack direction='row' spacing={2}>
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

        <Stack direction='row' spacing={2}>
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

        <Stack direction='row' spacing={2}>
          <Controller
            control={control}
            name='gender'
            defaultValue=''
            rules={{
              required: { value: true, message: 'Please Select Gender...' },
            }}
            render={({ field }) => {
              return (
                <LabelTextField label='Gender'>
                  <StyledOutlinedTextField
                    SelectProps={{ displayEmpty: true }}
                    select
                    placeholder='Select Gender...'
                    {...field}
                  >
                    <MenuItem value='' disabled>
                      Select Gender...
                    </MenuItem>
                    <MenuItem value='1'>Male</MenuItem>
                    <MenuItem value='2'>Female</MenuItem>
                  </StyledOutlinedTextField>
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

        <Stack direction='row' spacing={2}>
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

        <Stack direction='row' spacing={2}>
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
                    id='province'
                    options={provincesList}
                    onChange={(e, val) => {
                      setValue('province', val as Province.IProvince);
                    }}
                    onInputChange={(e, val) => {
                      setValue('province', val);
                    }}
                    getOptionLabel={(option) =>
                      (option as Province.IProvince).name_km || ''
                    }
                    renderOption={(props, option) => (
                      <MenuItem key={option.id} {...props}>
                        {option.name_km}
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
                    id='district'
                    options={districtList.filter(
                      (option) =>
                        option.province_id ===
                          (watch('province') as Province.IProvince)?.id || ''
                    )}
                    getOptionLabel={(option) =>
                      (option as District.IDistrict).name_km || ''
                    }
                    renderOption={(props, option) => (
                      <MenuItem key={option.id} {...props}>
                        {option.name_km}
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

        <Stack direction='row' spacing={2}>
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
                      (option as Commune.ICommune).name_km || ''
                    }
                    renderOption={(props, option) => (
                      <MenuItem key={option.id} {...props}>
                        {option.name_km}
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
            name='village'
            defaultValue=''
            render={({ field: { onChange, value, ...rest } }) => {
              return (
                <LabelTextField label='Village'>
                  <Autocomplete
                    freeSolo
                    disableClearable
                    id='village'
                    options={(villageList as Village.IVillage[]).filter(
                      (option) =>
                        option.commune_id ===
                          (watch('commune') as Commune.ICommune)?.id || ''
                    )}
                    getOptionLabel={(option) =>
                      (option as Village.IVillage).name_km || ''
                    }
                    renderOption={(props, option) => (
                      <MenuItem key={option.id} {...props}>
                        {option.name_km}
                      </MenuItem>
                    )}
                    onChange={(e, val) =>
                      setValue('village', val as Village.IVillage)
                    }
                    onInputChange={(e, val) => setValue('village', val)}
                    renderInput={(params) => (
                      <StyledOutlinedTextField
                        placeholder='Enter Village'
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
      </Stack>
    </>
  );
};

export default CustomerForm;
