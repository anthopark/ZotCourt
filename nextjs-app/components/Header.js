import styles from './css/Header.module.css';
import SearchBar from '@components/SearchBar';
import Logo from '@components/Logo';
import HeaderText from '@components/HeaderText';



const Header = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>



      <div className={styles.searchBarContainer}>
        <HeaderText />
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;