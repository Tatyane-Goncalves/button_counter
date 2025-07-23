import { Button } from './ui/button'

interface ButtonIncrementProps {
  onClick: () => void
  disabled: boolean
}

export default function ButtonIncrement({
  onClick,
  disabled,
}: ButtonIncrementProps) {
  return (
    <Button disabled={disabled} onClick={onClick} size={'lg'}>
      Incrementar
    </Button>
  )
}
