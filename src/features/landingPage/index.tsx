import styles from "./styles.module.scss"

const LandingPage = () => {
  return (
    <div>
      <section className={`${styles.hero} ${styles.isPrimary} ${styles.isBold}`}>
        <div className={styles.heroBody}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Movie Fight
              <span className={styles.icon}>
                <i className="fas fa-film"></i>
              </span>
            </h1>
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <div className={styles.autocomplete}></div>

        <div className={`${styles.column} ${styles.isHalf} ${styles.notification} ${styles.isPrimary} ${styles.tutorial}`}>
          <h1 className={styles.title}>Search For a Movie on Both Sides</h1>
          <p className={styles.subtitle}>We will tell you which is best!</p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <div id={styles.leftAutoComplete}></div>
            <div id={styles.leftSummary}></div>
          </div>

          <div className={styles.column}>
            <div id={styles.rightAutoComplete}></div>
            <div id={styles.rightSummary}></div>
          </div>
        </div>
        <div id={styles.summary}></div>
      </div>
    </div>
  );
};

export { LandingPage };
