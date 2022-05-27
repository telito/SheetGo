import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { banner } from '../../../../assets/images';
import RatingStars from '../../../../components/RatingStars';

const BannerHome = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          height: '360px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        <Card
          sx={{
            minWidth: '350px',
            maxWidth: '500px',
            width: '30%',
            height: '100%',
            background: `rgba(255,255,255, 0.4);`,
            backdropFilter: 'blur(15px)',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <CardContent
            sx={{
              border: 'none',
              shadow: 'none',
            }}
          >
            <Typography
              sx={{
                fontSize: '30px',
                fontWeight: '700',
                color: '#000000',
                lineHeight: '1.3',
              }}
              color="text.secondary"
              gutterBottom
            >
              Template of the Week: Productivity during quarantine times
            </Typography>

            <Typography
              sx={{ fontWeight: '700', color: '#000000' }}
              color="text.secondary"
              gutterBottom
            >
              by Todd Kurtz
            </Typography>

            <Box
              sx={{
                height: '100%',
                verticalAlignment: 'text-bottom',
                position: 'absolute',
                top: '80%',
              }}
            >
              <RatingStars name={'BannerHome'} />
              <Typography>#LEAN #AGILE #PRODUCTIVITY</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default BannerHome;
