import './searchbar.css';

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <label className="search-bar-label">
        Buscar productos
      </label>
      <input
        className="search-bar-input"
        value={searchQuery}
        placeholder="Escribe para filtrar por nombre"
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
