import mainImg from './../../../src/assets/images/main-img.jpeg';
import secondImg from './../../../src/assets/images/second-img.jpg';
import share from '../../assets/images/share.png';
import talk from '../../assets/images/talk.png';
import like from '../../assets/images/like.png';
import styles from './index.module.css';

const Main = () => {
  return (
    <main>
      <section className={styles.firstSection}>
        <img
          src={mainImg}
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
      <section className={styles.thirdSection}>
        <article className={styles.textContainer}>
          <h2 className={styles.thirdHeading}>
            Acreditamos que a divulgação também é uma ferramenta democrática.
          </h2>
          <p className={styles.thirdText}>
            Fez parte ou conhece uma iniciativa educacional que deu certo?
          </p>
          <h4 className={styles.strongText}>
            <strong>Compartilhe com todos!</strong>
          </h4>
          <p className={styles.thirdText}>
            Encontrou alguma experiência que pode funcionar em sua realidade?
          </p>
          <h4 className={styles.strongText}>
            <strong>Experimente e compartilhe aqui!</strong>
          </h4>
        </article>
        <img
          className={styles.secondImg}
          src={secondImg}
          alt="Mulher saindo de um frame de celular, conectando-se com garoto através da tela"
        />
      </section>
      <footer className={styles.footer}>
        <p>
          <q>A educação deve fazer sentido para as pessoas.</q> -{' '}
          <em>Paulo Freire</em>
        </p>
        <p>
          Se fez sentido para você, pode fazer sentido para outra pessoa também!
        </p>
      </footer>
    </main>
  );
};

export { Main };
