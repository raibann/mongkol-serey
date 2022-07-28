import { Avatar, Button, Grid, Typography } from '@mui/material';

const PhotoDialogContent = () => {
  return (
    <>
      <Typography variant='h5' p={2} textAlign='center'>
        Add Photo
      </Typography>

      <Grid container height='calc(100% - 64px)' pb={2}>
        <Grid item xs={3} pl={2}>
          <Avatar
            variant='rounded'
            src=''
            alt='preview-photo'
            sx={{
              width: '100%',
              height: 'auto',
              aspectRatio: '1/1',
            }}
          />
          <Button
            variant='contained'
            disableElevation
            sx={{
              mt: 1,
              width: '100%',
            }}
          >
            Upload
            <input
              hidden
              accept='image/*'
              multiple
              type='file'
              style={{ display: 'hidden' }}
            />
          </Button>
        </Grid>

        <Grid
          item
          xs={9}
          px={2}
          pb={2}
          sx={{
            overflow: 'auto',
            height: '100%',
          }}
        >
          <Grid container spacing={2}>
            {Array(12)
              .fill('')
              .map((img, i) => {
                return (
                  <Grid item xs={4}>
                    <Avatar
                      variant='rounded'
                      src=''
                      alt={`photo${i}`}
                      sx={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '1/1',
                      }}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PhotoDialogContent;
