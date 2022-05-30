import * as React from 'react';

import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import { getStarLocalStorage, setStarLocalStorage } from '../../hooks';

interface RatingStartsProps {
  idItem: string;
}

const Ratingstars: React.FC<RatingStartsProps> = (props) => {
  const initialRating = JSON.parse(getStarLocalStorage(props.idItem as string));

  const [value, setValue] = React.useState<number | null>(
    initialRating ? initialRating : 0
  );
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setStarLocalStorage(props.idItem, newValue as number);
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        icon={<StarIcon style={{ color: '#6F6F6F' }} fontSize="inherit" />}
      />
    </Box>
  );
};

export default Ratingstars;
