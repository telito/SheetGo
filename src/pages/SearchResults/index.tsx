import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import initialDetails from '../../api';
import CardItens from '../../components/CardItens';
interface CustomizedState {
  search: string;
}
interface SearchResultsProps {
  search: string;
}
const SearchResults: React.FC<SearchResultsProps> = (props) => {
  const [filter, setFilter] = useState([{}]);

  const filtered = () => {
    //crie um filtro a partir da array de tags da initialDetails
    //e retorne uma array com os dados filtrados
    const include = initialDetails.filter((item) => {
      if (item.tags.includes(props.search)) {
        return item;
      }
    });

    setFilter(include);
  };
  console.log(props.search);

  useEffect(() => {
    filtered();
  }, [props.search]);

  return (
    <Grid container spacing={2}>
      {filter.map((item: any) => {
        return (
          <Grid key={item.id} item xs={3}>
            <CardItens
              title={item.title}
              author={item.author}
              images={item.imgPath}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SearchResults;
