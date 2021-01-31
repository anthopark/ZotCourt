import styles from './css/SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.searchInput} />
    </div>
  );
}

export default SearchBar;