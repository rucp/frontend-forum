import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/diego3g.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAmdTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de Maio às 13:13" dateTime="2022-05-11 08:12:22">Cerca de 1h atrás</time>
                        </div>
                    </header>
                    <p>Muito bom! Parabéns!</p>

                </div>
                <footer>
                    Aplaudir
                </footer>
            </div>
        </div>
    )
}