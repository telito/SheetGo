import React from 'react';
import { useNavigate } from 'react-router';

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
  idItem: string;
  title: string;
  images: string;
  author: string;
  tags?: string[];
  price: string;
}

const CardItens: React.FC<CardItensProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/TemplateView', { state: { idItem: props.idItem } });
  };

  return (
    <Card sx={{ maxWidth: 280 }}>
      <Box sx={{ backgroundColor: '#f8f8f8' }}>
        <CardMedia
          component="img"
          height="140"
          image={props.images}
          sx={{ width: '50%', margin: 'auto', cursor: 'pointer' }}
          onClick={handleClick}
        />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: '1em', fontWeight: '700', cursor: 'pointer' }}
          onClick={handleClick}
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
      <CardActions sx={{ padding: '2px 15px 15px 12px', marginTop: '-10px' }}>
        <Ratingstars idItem={props.idItem} />
        <Typography sx={{ color: '#0729C5', fontWeight: 'bold' }}>
          ${props.price}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CardItens;
