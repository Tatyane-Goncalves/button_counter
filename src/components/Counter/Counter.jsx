import { useState } from "react";
import styles from "./Counter.module.scss";
import ButtonReset from "../ButtonReset/ButtonReset";
import ButtonIncrement from "../ButtonIncrement/ButtonIncrement";

export default function Counter() {
  const CLICK_LIMIT = 10;
  const [isCounter, setIsCounter] = useState(0);
  const [isBlock, setIsBlock] = useState(false);

  const handleReset = () => {
    setIsCounter(0);
    setIsBlock(false);
  };


  const handleIncrement = () => {
    if (isCounter < CLICK_LIMIT) {
      const newCounter = isCounter + 1;
      setIsCounter(newCounter);

      if (newCounter >= 10) {
        setIsBlock(true);
      }
    }
  };

  return (
    <section className={styles.counter}>
      <h1 className={styles.messageClick}>Você clicou {isCounter} vezes!</h1>
      <ButtonIncrement onClick={handleIncrement} disabled={isBlock} />

      {isBlock && (
        <>
          <p className={styles.messageLimit}>
            Você chegou no limite máximo de cliques!
          </p>
          <ButtonReset onReset={handleReset} />
        </>
      )}
    </section>
  );
}
