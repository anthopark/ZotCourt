import styles from './css/Main.module.css';
import CourtItem from '@components/CourtItem';

import courtData from '../dummy-data.json';

const Main = (props) => {
  return (
    <div className={styles.container}>
      {props.children}

      {courtData.courts.map((court, index) => {
        return (
          <CourtItem
            key={index}
            courtInfo={court}
          />
        )
      })}

    </div>
  );
}

export default Main;