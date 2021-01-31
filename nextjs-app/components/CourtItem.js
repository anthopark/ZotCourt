import styles from './css/CourtItem.module.css';
import CheckIn from '@components/CheckIn';

const CourtItem = (props) => {

  const currentUsageUI = (
    <>
      {props.occupied ? (
        <div className={styles.occupied}>
          someone is playing
        </div>
      ) : (
          <div className={styles.vacant}>
            empty

          </div>
        )}
    </>

  )




  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* backetball court image */}

        <img src="/basketball-court1.jpg" ></img>

      </div>
      <div className={styles.courtInfoContainer}>
        <div className={styles.addressContainer}>
          <div>
            {props.courtName}
          </div>
          <div>
            {props.streetAddr}
          </div>
          <div>
            {props.restAddr}
          </div>
        </div>

        {currentUsageUI}

        <CheckIn
          checkedStatus={props.checkedIn}
        />
      </div>


    </div>
  );
}

export default CourtItem;