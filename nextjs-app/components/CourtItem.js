import styles from './css/CourtItem.module.css';


const CourtItem = ({ courtInfo }) => {
    return ( 
        <div className={styles.container}>
            <h1>{courtInfo.name}</h1>
            <h2>{courtInfo.location}</h2>
        </div>
     );
}
 
export default CourtItem;