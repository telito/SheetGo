import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';

import Ratingstars from '../RatingStars';

interface CardItensProps {
  title: string;
  images: string;
  author: string;
  tags?: string[];
}

const CardItens: React.FC<CardItensProps> = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ backgroundColor: '#f8f8f8' }}>
        <CardMedia
          component="img"
          height="140"
          image={props.images}
          sx={{ width: '50%', margin: 'auto' }}
        />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: '1.1em', fontWeight: 'bold' }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: '0.7em', fontWeight: 'bold' }}
        >
          By {props.author}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: '2px 15px' }}>
        <Ratingstars name={'11'} />
        <Typography sx={{ color: '#0729C5', fontWeight: 'bold' }}>
          $14.5
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CardItens;
