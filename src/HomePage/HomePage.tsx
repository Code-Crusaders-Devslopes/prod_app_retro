import styles from './homePage.module.css';

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.player}>
            <p>PlayerName</p>
            <p>000000</p>
          </div>
          <div className={styles.lives}>
            <img src="4_20.jpg" alt="Mushroom" className={`${styles.icon}`}/>
            <p>X 00</p>
          </div>
          <div className={styles.world}>
            <p>World</p>
            <p>1x1</p>
          </div>
          <div className={styles.time}>
            <p>Time</p>
            <p>399</p>
          </div>
        </div>
        {/* end header */}
        <div className={styles.title}>Shall we Level Up?</div>
        <div className={styles.yes}>Yes, Let's Begin:</div>
        <div className={styles.no}>Nah!</div>

        <div className={styles.hpbuttons}>
          <a href="/taskPage">Task List</a>

          <a href="/sticky-note">Sticky Notes</a>
        </div>
        {/* end buttons */}
      </div>
      {/* end container */}
    </>
  );
};

export default HomePage;
