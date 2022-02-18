export interface BookListProps {
  author: string; 
  country: string; 
  imageLink: string; 
  language: string; 
  link: string;
  pages: number;
  title: string;
  year: number;
}

export interface SearchProps {
  placeholder: string;
  bookList: BookListProps[];
}

export interface SearchResultProps {
  filteredBook : BookListProps[];
}