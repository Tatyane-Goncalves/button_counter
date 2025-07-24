import { useCounter } from '@/hooks/useCounter'
import ButtonDecrement from './ButtonDecrement'
import ButtonIncrement from './ButtonIncrement'
import ButtonReset from './ButtonReset'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export default function Counter() {
  const {
    CLICK_LIMIT,
    handleDecrement,
    handleIncrement,
    handleReset,
    isCounter,
  } = useCounter()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contador de clique</CardTitle>
        {isCounter > 1 && (
          <CardDescription>Você clicou {isCounter} vezes!</CardDescription>
        )}
        {isCounter === 0 && (
          <CardDescription>Você ainda não clicou no botão.</CardDescription>
        )}
        {isCounter === 1 && (
          <CardDescription>Você clicou {isCounter} vez!</CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <section className="flex w-full items-center justify-center gap-2 md:gap-4 ">
          <ButtonDecrement
            disabled={isCounter === 0}
            onClick={handleDecrement}
          />
          <ButtonIncrement
            disabled={isCounter === 10}
            onClick={handleIncrement}
          />
        </section>

        <section className="flex flex-col items-center gap-2 px-3">
          {isCounter >= 1 && isCounter < 10 ? (
            <ButtonReset onReset={handleReset} />
          ) : (
            ''
          )}

          {isCounter === CLICK_LIMIT && (
            <>
              <ButtonReset onReset={handleReset} />
              <p className="text-sm">
                Você chegou no limite máximo de cliques.
              </p>
            </>
          )}
        </section>
      </CardContent>
    </Card>
  )
}
