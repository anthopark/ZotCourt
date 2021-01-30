import styles from './css/Main.module.css';
import CourtItem from '@components/CourtItem';

import courtData from '../dummy-data.json';

const Main = (props) => {
    return ( 
        <div className={styles.container}>
            {props.children}
            
            {courtData.courts.map((court) => {
                return (
                    <CourtItem
                        courtInfo={court}
                    />
                )
            })}

        </div>
     );
}
 
export default Main;