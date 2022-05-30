import { Box, Container, Typography } from '@mui/material';

import BannerHome from './components/BannerHome';
import SliderHome from './components/SliderHome';

const Home = () => {
  return (
    <div>
      <Container maxWidth={'xl'}>
        <Box sx={{ my: 5 }}>
          <Typography
            mb={3}
            variant={'h4'}
            style={{ color: '#0729C5', fontWeight: 'bold', fontSize: '2.5rem' }}
          >
            Discover new templates
          </Typography>
        </Box>
        <BannerHome />
        <Box m={4} />
        <Typography
          mb={3}
          variant={'h4'}
          style={{ color: '#0729C5', fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          Recomended for you
        </Typography>
        <SliderHome typeSlider={'recomended'} />
        <Box m={4} />
        <Typography
          mb={3}
          variant={'h4'}
          style={{ color: '#0729C5', fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          For business
        </Typography>
        <SliderHome typeSlider={'business'} />
      </Container>
    </div>
  );
};

export default Home;
