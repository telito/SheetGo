import React, { useEffect, useState } from 'react';
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

interface SliderHomeProps {
  typeSlider: string;
}

const SliderHome: React.FC<SliderHomeProps> = (props) => {
  const [sliders, setSliders] = useState([{}]);

  const selectTypeSlider = () => {
    const include = initialDetails.filter((item) => {
      if (item.tags.includes(props.typeSlider.toLowerCase())) {
        return item;
      }
    });

    setSliders(include);
  };
  useEffect(() => {
    selectTypeSlider();
    console.log(sliders);
  }, []);

  const slider = React.useRef(null);
  const settings = {
    speed: 500,

    slidesToShow: 4,
    slidesToScroll: 1,

    nextArrow: <VoidArrow />,
    prevArrow: <VoidArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
            {sliders.map((item: any) => (
              <div key={item.id}>
                <CardItens
                  idItem={item.id}
                  title={item.title}
                  images={item.imgPath}
                  author={item.author}
                  price={item.price}
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

export default SliderHome;
