import { useState } from "react"
import styles from "./Counter.module.scss"

export default function Counter() {
  const CLICK_LIMIT = 10
  const [isCounter, setIsCounter] = useState(0)
  const [isBlock, setIsBlock] = useState(false)

  const handleClick = () => {
    if (isCounter + 1 >= CLICK_LIMIT) {
      setIsBlock(true)
    }
    setIsCounter(isCounter + 1)
  }

  const handleReset = () => {
    setIsCounter(0)
    setIsBlock(false)
  }

  return (
    <section className={styles.counter}>
      <p className={styles.messageClick}>Você clicou {isCounter} vezes!</p>
      <button onClick={handleClick} disabled={isBlock} className={styles.btn_increment}>Incrementar</button>

      {isBlock && (
        <>
          <p className={styles.messageLimit}>Você chegou no limite máximo de cliques!</p>
          <button onClick={handleReset} className={styles.btn_reset}>Reset</button>
        </>
      )}

    </section>
  )
}
