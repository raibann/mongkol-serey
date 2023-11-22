import { Stack, Button, Avatar, Typography } from '@mui/material';
import { Camera } from 'iconsax-react';

const InventoryRightInput = () => {
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
            variant='rounded'
            sx={{
              // width: 135,
              // height: 135,
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
            // onChange={(e) => uploadImage(e, onChange)}
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
