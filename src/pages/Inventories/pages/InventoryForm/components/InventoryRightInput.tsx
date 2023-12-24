import { Stack, Button, Avatar, Typography } from '@mui/material';
import { Camera } from 'iconsax-react';
import { useFormContext } from 'react-hook-form';
import { InventoryInput } from '..';
import { uploadImage } from 'utils/upload-image-util';
import { useRequest } from 'ahooks';
import TELEGRAM_API from 'api/telegram';

const InventoryRightInput = () => {
  const { setValue, watch } = useFormContext<InventoryInput>();

  const { run: runUpload, loading: loadingUpload } = useRequest(
    TELEGRAM_API.uploadFile,
    {
      manual: true,
      onError: () => {
        setValue('product.images', '');
      },
      onSuccess: (res) => {
        setValue('product.images', res.path);
      },
    }
  );

  return (
    <>
      <Stack
        width='100%'
        alignItems='center'
        maxWidth='sm'
        alignSelf='center'
        spacing={2}
      >
        <Button
          component='label'
          sx={{
            opacity: loadingUpload ? 0.5 : 1,
            p: 0,
            border: 'solid 1px',
            borderColor: 'divider',
            bgcolor: 'transparent',
            width: '100%',
            aspectRatio: '1 / 1',
          }}
          color='inherit'
        >
          <Avatar
            src={watch('product.images')}
            variant='rounded'
            sx={{
              cursor: 'pointer',
              bgcolor: 'grey.100',
              width: '100%',
              height: '100%',
            }}
          >
            <Stack
              justifyContent='center'
              alignItems='center'
              spacing={1}
              color='grey.500'
            >
              <Camera variant='Bulk' size={28} />
              <Typography variant='subtitle2' textTransform='none'>
                Upload Product Photo
              </Typography>
            </Stack>
          </Avatar>
          <input
            type='file'
            hidden
            accept='image/jpeg, image/png'
            onChange={(e) =>
              uploadImage(e, (baseUrl, file) => {
                setValue('product.images', baseUrl);
                runUpload(file);
              })
            }
          />
        </Button>
        <Typography
          color='text.secondary'
          variant='subtitle2'
          whiteSpace='pre-line'
          textAlign='center'
        >
          Allowed *.jpeg, *.jpg, *.png max size of 2MB
        </Typography>
      </Stack>
    </>
  );
};

export default InventoryRightInput;
