import styles from './css/Header.module.css';
import SearchBar from '@components/SearchBar';
import Logo from '@components/Logo';



const Header = (props) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>

            <div className={styles.searchBarContainer}>
                <SearchBar />
            </div>
        </div>
     );
}
 
export default Header;