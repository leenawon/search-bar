import SearchBar from './components/SearchBar/SearchBar';
import bookList from './data/data.json';
import './Reset.css';
import './App.css';

function App() {
  return (
    <div className='app'>
      <h1 className="title">Book Search Bar</h1>
      <SearchBar placeholder='책 이름을 입력하세요' bookList={bookList} />
    </div>
  );
}

export default App;
