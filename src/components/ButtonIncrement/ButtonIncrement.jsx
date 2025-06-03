import styles from "./ButtonIncrement.module.scss"

export default function ButtonIncrement({ onClick }) {
  return (
     <button onClick={onClick} className={styles.btn_increment}>Incrementar</button>
  )
}
