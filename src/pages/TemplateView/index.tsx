import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { getItemTemplate } from '../../hooks';

interface CustomizedState {
  idItem: string;
}
interface ItemTemplate {
  id: string;
  title: string;
  imgPath: string;
  author: string;
  tags: string[];
  description: string;
  price: string;
}

const TemplateView = () => {
  const [item, setItem] = useState<ItemTemplate>({
    id: '',
    title: '',
    imgPath: '',
    author: '',
    tags: [''],
    description: '',
    price: '',
  });

  const location = useLocation();
  const state = location.state as CustomizedState;
  const { idItem } = state;

  useEffect(() => {
    const itemById = getItemTemplate(idItem);
    const convert: unknown = itemById[0];
    setItem(convert as ItemTemplate);
  }, [idItem]);

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '100%', lg: '400px' },
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: { lg: 'space-between' },
        background: 'white',
        padding: '10px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          padding: '10px',
        }}
      >
        <Typography
          sx={{ color: '#0729C5', fontWeight: 'bold', fontSize: '1.5rem' }}
          variant={'h6'}
        >
          {' '}
          {item.title}{' '}
        </Typography>

        <Typography
          sx={{ color: '#86898E', fontSize: '17px', marginTop: '20px' }}
          variant={'h6'}
        >
          {' '}
          {item.description}
        </Typography>
      </Box>
      <Box>
        <img src={item.imgPath} style={{ maxWidth: '100%' }} alt="" />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'right',
            alignItems: 'bottom',

            border: '1px solid #e0e0e0',
            borderRadius: '4px',
          }}
        >
          <Typography
            sx={{
              color: '#0729C5',
              fontWeight: 'bold',
              fontSize: '1.rem',
              textAlign: 'center',
              margin: '30px',
            }}
            variant={'h6'}
          >
            {' '}
            ${item.price}{' '}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TemplateView;
