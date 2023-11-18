import { Box, Typography, useTheme, Button } from '@mui/material';
import { EmojiSad, MessageTick } from 'iconsax-react';

const SuccessResponse = ({
  background,
  height = 'auto',
  width = 'auto',
  boxWidth = 300,
  successTitle = 'Successful',
  successMessage = 'Operation Successful',
  successIcon,
  onClose,
  buttonText = 'OK',
}: {
  height?: string | number;
  width?: string | number;
  boxWidth?: string | number;
  successMessage?: string;
  successTitle?: string;
  successIcon?: React.ReactNode;
  background?: string;
  onClose?: () => void;
  buttonText?: string;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        height: height,
        width: width,
      }}
    >
      <Box
        sx={{
          p: 2,
          background: background || theme.palette.background.paper,
          borderRadius: 2,
          width: boxWidth,
          minHeight: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {successIcon || <MessageTick variant='Bulk' size={50} color={theme.palette.success.main} />}
        <Typography variant='h6' fontWeight='bold' color='success.dark' textAlign='center' mt={1}>
          {successTitle}
        </Typography>
        <Typography variant='body2' fontWeight='normal' color='success.main' textAlign='center' mb={2}>
          {successMessage}
        </Typography>
        {onClose && (
          <Button onClick={onClose} size='small' autoFocus>
            {buttonText}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SuccessResponse;
