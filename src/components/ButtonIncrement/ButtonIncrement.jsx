import styles from "./ButtonIncrement.module.scss"

export default function ButtonIncrement({ onClick, disabled }) {

  return (
     <button onClick={onClick} disabled={disabled} className={styles.btn_increment}>Incrementar</button>
  )
}
