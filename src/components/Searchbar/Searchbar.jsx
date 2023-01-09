import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsSearch } from 'react-icons/bs';
import {
  SearchbarStyled,
  Searchform,
  SearchButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const {
      elements: { query },
    } = event.currentTarget;
    const searchQuery = query.value.trim().toLowerCase();
    if (!searchQuery) {
      toast.error('Please enter the search query!', {
        position: 'top-center',
      });
      return;
    }
    onSubmit({ searchQuery });
    event.target.reset();
  };
  return (
    <SearchbarStyled>
      <Searchform onSubmit={handleSubmit}>
        <SearchButton aria-label="zoom" type="submit">
          <BsSearch />
          <ButtonLabel>Search</ButtonLabel>
        </SearchButton>
        <Input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Searchform>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
