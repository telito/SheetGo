import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Grid, Typography } from '@mui/material';

import initialDetails from '../../api';
import CardItens from '../../components/CardItens';

interface CustomizedState {
  searchText: string;
}

const SearchResults = () => {
  const [filter, setFilter] = useState([{}]);
  const [existFilter, setExistFilter] = useState(false);

  const location = useLocation();
  const state = location.state as CustomizedState;
  const { searchText } = state;
  //Crio um filtro a partir da array de tags da initialDetails
  //e retorne uma array com os dados filtrados
  const filtered = () => {
    const include = initialDetails.filter((item) => {
      if (item.tags.includes(searchText.toLowerCase())) {
        return item;
      }
    });

    if (include.length > 0) {
      setExistFilter(true);
      setFilter(include);
    } else {
      setExistFilter(false);
    }
  };

  useEffect(() => {
    filtered();
  }, [searchText]);

  return (
    <Container maxWidth={'xl'}>
      {existFilter ? (
        <Typography
          mb={3}
          variant={'h4'}
          style={{ color: '#0729C5', fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          We find the following results:
        </Typography>
      ) : (
        ''
      )}

      <Grid container spacing={2}>
        {existFilter ? (
          filter.map((item: any) => {
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
          })
        ) : (
          <Typography
            mb={3}
            variant={'h4'}
            style={{ color: 'grey', fontWeight: 'bold', fontSize: '2rem' }}
          >
            Nothing to display for: {searchText}
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default SearchResults;
