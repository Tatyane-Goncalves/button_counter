import styles from "./ButtonReset.module.scss"

export default function ButtonReset({ onReset }) {
  return (
    <button onClick={onReset} className={styles.btn_reset}>Resetar</button>
  )
}
