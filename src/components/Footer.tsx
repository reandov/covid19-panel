import styles from "../styles/components/Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <p>
            Painel desenvolvido por{" "}
            <strong>
              <a href="https://www.linkedin.com/in/evnrodr/">
                Evandro Rodrigues
              </a>
            </strong>
            .
          </p>
          <p>
            <a href="https://github.com/evnrodr/covid19-panel">
              Link para o repositório no <strong>GitHub</strong>.
            </a>
          </p>
        </div>

        <p className={styles.source}>
          Fonte dos dados:{" "}
          <a href="https://brasil.io/covid19/">
            <img
              src="https://brasil.io/static/img/logo/logo_br-io_fundo-escuro.bbbaf8e79edf.png"
              alt=""
              width="210px"
              height="40.5"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
