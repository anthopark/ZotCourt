import { useEffect, useState } from 'react';
import styles from './css/Main.module.css';

import { 
    getCourtAll
} from '../api/courtAPIs';

import CourtItem from '@components/CourtItem';

const sortById = (courts) => {
    courts.sort((prev, next) => {
        if (prev.courtId < next.courtId) return -1;
        else return 1;
    })
} 

const Main = () => {

    const [courts, setCourts] = useState([]);

    useEffect(() => {
        
        const getCourts = async () => {
            const response = await getCourtAll();
            sortById(response)
            setCourts(response);
            console.log(response);
        }

        setInterval(getCourts, 1000); // making request every 1 sec
    }, [])

    return ( 
        <div className={styles.container}>
            <div className={styles.sectionTitle}>
                <h2 className={styles.sectionTitleText}>
                    Courts Near Me
                </h2>
            </div>

            <div className={styles.courtList}>
                {
                    courts.map((court, index) => (
                        <CourtItem
                            key={index}
                            courtName={court.courtName}
                            occupied={court.occupied}
                            checkedIn={court.checkedIn}
                            streetAddr={court.streetAddr}
                            restAddr={court.restAddr}
                        />
                    ))
                }
            </div>
        </div>
     );
}
 
export default Main;