import Header from './Header';
import Main from './Main';

import styles from "./css/Layout.module.css";



const Layout = () => {
    return ( 
        <div className={styles.container}>
            <Header />
            <Main />
        </div>
     );
}

export default Layout;
