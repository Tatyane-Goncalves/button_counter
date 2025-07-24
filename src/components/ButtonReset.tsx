import { Loader } from 'lucide-react'
import { Button } from './ui/button'

interface ButtonResetProps {
  onReset: () => void
}

export default function ButtonReset({ onReset }: ButtonResetProps) {
  return (
    <Button onClick={onReset} variant={'secondary'}>
      <Loader />
    </Button>
  )
}
