import React from 'react';
import { useNavigate } from 'react-router';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, OutlinedInput } from '@mui/material';

const SearchBar = () => {
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();

  const handleKeyboard = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      if (search === '') {
        navigate('/');
      } else {
        navigate('/SearchResults', { state: { searchText: search } });
      }
    }
  };
  const handleSearchClick = () => {
    if (search === '') {
      navigate('/');
    } else {
      navigate('/SearchResults', { state: { searchText: search } });
    }
  };

  return (
    <OutlinedInput
      onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => handleKeyboard(e)}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value)
      }
      value={search}
      id="input-with-icon-adornment"
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon
            onClick={() => handleSearchClick()}
            sx={{ cursor: 'pointer' }}
          />
        </InputAdornment>
      }
      placeholder="Search"
      sx={{ width: '100%' }}
    />
  );
};

export default SearchBar;
