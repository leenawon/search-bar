import { useState } from 'react';
import { BookListProps, SearchProps } from '../../types/SearchBarType';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import SearchResult from '../SearchResult/SearchResult';
import './SearchBar.css';

export default function SearchBar({ placeholder, bookList }: SearchProps) {
  const [searchWord, setSearchWord] = useState<string>("");
  const [filteredBook, setFilteredBook] = useState<BookListProps[]>([]);
  ;
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchWord(text);
    if(text !== "") {
      const newList = bookList.filter((book) => {
        return book.title.toLowerCase().includes(text.toLowerCase());
      });
      setFilteredBook(newList);
    } else {
      setFilteredBook([]);
    }
  };

  const handleClose = () => {
    setFilteredBook([]);
    setSearchWord("");
  }

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <input type="text" placeholder={placeholder} autoFocus value={searchWord} onChange={handleFilter} />
        <div className="search-icon">
          {
            filteredBook.length === 0 ? 
              <SearchIcon /> 
              : 
              <CloseIcon onClick={handleClose} />
          }
        </div>
      </div>
      {
        filteredBook.length !== 0 &&
          <SearchResult filteredBook={filteredBook} />
      }
    </div>
  )
}
