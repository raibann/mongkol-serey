import { Box, Typography, useTheme, Button, Stack } from '@mui/material';
import { MessageQuestion } from 'iconsax-react';

const ConfirmContent = ({
  background,
  height = 'auto',
  width = 'auto',
  boxWidth = 300,
  title = 'Confirming',
  message = 'Are you sure?',
  icon,
  onConfirm,
  onClose,
  loading = false,
  buttonText = 'Confirm',
  buttonTextLoading = 'Loading...',
}: {
  height?: string | number;
  width?: string | number;
  boxWidth?: string | number;
  message?: string;
  title?: string;
  icon?: React.ReactNode;
  background?: string;
  onConfirm: () => void;
  onClose: () => void;
  buttonText?: string;
  buttonTextLoading?: string;
  loading?: boolean;
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
        {icon || (
          <MessageQuestion
            variant='Bulk'
            size={50}
            color={theme.palette.info.main}
          />
        )}
        <Typography variant='h6' fontWeight='bold' textAlign='center' mt={1}>
          {title}
        </Typography>
        <Typography
          variant='body2'
          fontWeight='normal'
          textAlign='center'
          mb={2}
        >
          {message}
        </Typography>
        <Stack direction='row' spacing={2}>
          {onClose && (
            <Button size='small' color='inherit' onClick={onClose}>
              Cancel
            </Button>
          )}
          <Button
            onClick={onConfirm}
            color='info'
            size='small'
            disabled={loading}
          >
            {loading ? buttonTextLoading : buttonText}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ConfirmContent;
