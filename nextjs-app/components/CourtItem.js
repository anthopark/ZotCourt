import styles from './css/CourtItem.module.css';


const CourtItem = (props) => {

  const currentUsageUI = (
    <>
      {props.occupied ? (
        <div className={styles.occupied}>
          Someone is playing
        </div>
      ) : (
          <div className={styles.vacant}>
            Empty
          </div>
        )}
    </>

  )




  return (
    <div className={styles.container}>
      {props.courtName}
      {currentUsageUI}
    </div>
  );
}

export default CourtItem;