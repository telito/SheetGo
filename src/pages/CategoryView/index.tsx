import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Grid, Typography } from '@mui/material';

import initialDetails from '../../api';
import CardItens from '../../components/CardItens';
interface CustomizedState {
  category: string;
}

//Esta filtragem de itens usa como base a mesma filtragem que está no SearchResults
//Porém existem algumas diferenças, por isso não criei um componente unico para fazer isso.
const CategoryView = () => {
  const [filter, setFilter] = useState([{}]);

  const location = useLocation();
  const state = location.state as CustomizedState;
  const { category } = state;
  const filtered = () => {
    const include = initialDetails.filter((item) => {
      if (item.tags.includes(category.toLowerCase())) {
        return item;
      }
    });

    setFilter(include);
  };

  useEffect(() => {
    filtered();
  }, [state]);

  return (
    <Container maxWidth={'xl'}>
      <Typography
        mb={3}
        variant={'h4'}
        style={{ color: '#0729C5', fontWeight: 'bold', fontSize: '1.5rem' }}
      >
        Results for {category}:
      </Typography>

      <Grid container spacing={2}>
        {filter.map((item: any) => {
          return (
            <Grid key={item.id} item xs={3}>
              <CardItens
                idItem={item.id}
                title={item.title}
                author={item.author}
                images={item.imgPath}
                price={item.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CategoryView;
