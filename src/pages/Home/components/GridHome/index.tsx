import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, ButtonBase, Box } from '@mui/material';

import initialDetails from '../../../../api';
import { rightArrow } from '../../../../assets/images';
import CardItens from '../../../../components/CardItens';

function VoidArrow() {
  return <div style={{ display: 'none' }}></div>;
}

function SampleNextArrow(props: any) {
  return (
    <ButtonBase
      style={{
        ...props.style,
        display: 'block',
        minWidth: 35,
        minHeight: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderRadius: '100%',
        boxShadow: '0 1px 3px rgb(0 0 0 / 10%)',
        cursor: 'pointer',
      }}
      onClick={() => props.slider.current.slickNext()}
    >
      <img src={rightArrow} />
    </ButtonBase>
  );
}

function SamplePrevArrow(props: any) {
  return (
    <ButtonBase
      className="slick-arrow"
      style={{
        ...props.style,
        display: 'block',
        minWidth: 35,
        minHeight: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -10,
        borderRadius: '100%',
        boxShadow: '0 1px 3px rgb(0 0 0 / 10%)',
        cursor: 'pointer',
      }}
      onClick={() => props.slider.current.slickPrev()}
    >
      <img src={rightArrow} />
    </ButtonBase>
  );
}

const GridHome = () => {
  const slider = React.useRef(null);
  const settings = {
    speed: 500,
    maxWidth: '100%',
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <VoidArrow />,
    prevArrow: <VoidArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth={'xl'} sx={{ margin: 'auto' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ maxWidth: '100%', margin: '0 20px' }}>
          <Slider ref={slider} {...settings}>
            {initialDetails.map((item: any) => (
              <div key={item.id}>
                <CardItens
                  title={item.title}
                  images={item.imgPath}
                  author={item.author}
                />
              </div>
            ))}
          </Slider>
        </Box>

        <SampleNextArrow slider={slider} />
      </Box>
    </Container>
  );
};

export default GridHome;
