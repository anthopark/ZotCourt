import styles from './css/CheckIn.module.css';


const CheckIn = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.checkInBtn}>
        Check-In
      </button>
      {/* occupied status */}

      <div className={styles.statusContainer}>
        {props.checkedStatus}
        <p>people checked in</p>
      </div>



    </div>
  );
}

export default CheckIn;