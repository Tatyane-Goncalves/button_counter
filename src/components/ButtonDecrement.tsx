import { Button } from './ui/button'

interface ButtonDecrementProps {
  onClick: () => void
  disabled: boolean
}

export default function ButtonDecrement({
  onClick,
  disabled,
}: ButtonDecrementProps) {
  return (
    <Button disabled={disabled} onClick={onClick} size={'lg'}>
      Decrementar
    </Button>
  )
}
