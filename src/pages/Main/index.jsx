import MainImg from './../../../src/assets/images/main-img.jpeg';
import share from '../../assets/images/share.png';
import talk from '../../assets/images/talk.png';
import like from '../../assets/images/like.png';

import styles from './index.module.css';

const Main = () => {
  return (
    <main>
      <section className={styles.firstSection}>
        <img
          src={MainImg}
          alt="dois homens e uma mulher em ambiente virtualizado de aprendizagem "
          className={styles.mainImg}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.mainHeading}>educ@Fórum</h1>
          <h3 className={styles.secondaryHeading}>
            Um ambiente onde estudantes e educadores podem compartilhar
            experiências que deram certo
          </h3>
        </div>
      </section>

      <section className={styles.secondSection}>
        <h2 className={styles.missionContainer}>
          O educ@Fórum tem a missão de conectar educadores e estudantes,
          proporcionando oportunidades de assistência educacional para todos.
        </h2>
        <div className={styles.line} />
        <div className={styles.iconsContainer}>
          <div className={styles.iconItens}>
            <img src={share} alt="" />
            <h3>Compartilhe sua experiência.</h3>
          </div>

          <div className={styles.iconItens}>
            <img src={talk} alt="" />
            <h3>Interaja com estudantes e educadores.</h3>
          </div>

          <div className={styles.iconItens}>
            <img src={like} alt="" />
            <h3>
              Vamos unir forças para tornar a educação acessível para todos.
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
