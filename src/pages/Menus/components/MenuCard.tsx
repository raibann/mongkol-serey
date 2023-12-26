import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from '@mui/material';

const MenuCard = ({ menu }: { menu: IMenu.ResMenus }) => {
  return (
    <Card>
      <CardMedia
        image='https://api.telegram.org/file/bot5683327648:AAForuzEywsdCCXFlR04En_Gl7pD34poVl4/documents/file_39.jpg'
        title={menu.name}
        sx={{ aspectRatio: '4 / 3' }}
      />
      <CardContent sx={{ height: 100 }}>
        <Typography noWrap variant='h6' lineHeight={1.5} component='div'>
          {menu.name}
        </Typography>
        {menu.items.map((item) => (
          <Typography variant='body2' key={item.id} color='text.secondary'>
            {item.name}
          </Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button size='small'>Edit</Button>
        <Button size='small'>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default MenuCard;
