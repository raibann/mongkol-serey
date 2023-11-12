import { Stack, Avatar, Typography, Button } from '@mui/material';
import { Camera } from 'iconsax-react';
import { uploadImage } from 'utils/upload-image-util';

interface IUploadButtonProps {
  label?: string;
  src?: string;
  onChange?: (dataUrl: string, file: File) => void;
}

const UploadButton = ({
  label,
  src,
  onChange = () => null,
}: IUploadButtonProps) => {
  return (
    <Stack width='100%' alignItems='center' spacing={1}>
      <Button
        component='label'
        sx={{
          p: 1.5,
          borderRadius: '50%',
          border: 'dashed 1px',
          borderColor: 'divider',
          bgcolor: 'transparent',
        }}
        color='inherit'
      >
        <Avatar
          src={src}
          sx={{
            width: 135,
            height: 135,
            cursor: 'pointer',
            bgcolor: 'grey.100',
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
              Upload Photo
            </Typography>
          </Stack>
        </Avatar>
        <input
          type='file'
          hidden
          accept='image/jpeg, image/png'
          onChange={(e) => uploadImage(e, onChange)}
        />
      </Button>
      <Typography
        color='text.secondary'
        variant='subtitle2'
        whiteSpace='pre-line'
        textAlign='center'
      >
        {label ||
          `Allowed *.jpeg, *.jpg, *.png
        max size of 2MB`}
      </Typography>
    </Stack>
  );
};

export default UploadButton;
