import styles from './css/CourtItem.module.css';


const CourtItem = (props) => {
    return ( 
        <div className={styles.container}>
            {props.courtName}
        </div>
     );
}
 
export default CourtItem;