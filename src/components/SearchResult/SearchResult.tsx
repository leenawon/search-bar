import { SearchResultProps } from '../../types/SearchBarType';
import './SearchResult.css';


export default function SearchResult({ filteredBook }: SearchResultProps) {
  return (
    <ul className="search-result">
      {filteredBook.map((book, index) => (
        <li key={index}>
          <a href={book.link} target="_blank" rel="noreferrer">
            {book.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
