import MainImg from './../../../src/assets/images/main-img.jpeg';

import styles from './index.module.css';

const Home = () => {
  return (
    <main>
      <section className={styles.section}>
        <img
          src={MainImg}
          alt="dois homens e uma mulher em ambiente virtualizado de aprendizagem "
        />
        <div className={styles.textContainer}>
          <h1 className={styles.mainHeading}>educ@Fórum</h1>
          <h3 className={styles.secondaryHeading}>
            Um ambiente onde
            <br /> estudantes e<br /> educadores podem<br /> compartilhar<br /> experiências que<br />
            deram certo
          </h3>
        </div>
      </section>
    </main>
  );
};

export default Home;
