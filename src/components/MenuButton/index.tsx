import { useNavigate } from 'react-router';

import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography } from '@mui/material';

interface MenuButtonProps {
  nameButton: string;
}
const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    if (props.nameButton === 'home') {
      navigate('/');
    } else {
      navigate('/CategoryView', { state: { category: props.nameButton } });
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',

        border: '1.3px solid #e0e0e0',
        borderRadius: '4px',
        width: '100%',
        padding: '8px',
      }}
      onClick={() => handleClick()}
    >
      <Box
        sx={{
          background: '#EDF2F4',

          width: '38px',
          height: '38px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MenuIcon sx={{ color: '#344ccd' }} />
      </Box>

      <Box sx={{ margin: 'auto', marginLeft: '10px' }}>
        <Typography sx={{ color: '#86898E', fontSize: '17px' }} variant={'h6'}>
          {props.nameButton}
        </Typography>
      </Box>

      <Box></Box>
    </Box>
  );
};

export default MenuButton;
