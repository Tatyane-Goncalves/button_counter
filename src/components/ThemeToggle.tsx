import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from './ui/button'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      size={'icon'}
      title={`Alterar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
      variant={'ghost'}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  )
}
