import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from '@mui/material';

const MenuCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        image='/images/login_banner.jpg'
        title='menu image'
        sx={{ aspectRatio: '4 / 3' }}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          បាយថ្ងៃត្រង់
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          មាន់រ៉ូទី, ត្រីប្រម៉ាចៀន, ស៊ុបក្រពះជ្រូកម្រេចខ្ចី, បាយសូត្រមន្តចូលរោង,
          ត្រីបឹងកញ្ឆែត, ភ្លាសាច់គោ, តុងយ៉ាំគ្រឿងសមុទ្រ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Edit</Button>
        <Button size='small'>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default MenuCard;
