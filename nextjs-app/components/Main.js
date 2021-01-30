import styles from './css/Main.module.css';
import CourtItem from '@components/CourtItem';

const Main = (props) => {
    return ( 
        <div className={styles.container}>
            {props.children}
            <CourtItem />
        </div>
     );
}
 
export default Main;