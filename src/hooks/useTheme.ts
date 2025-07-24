import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const body = window.document.documentElement

    if (theme === 'dark') {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return {
    theme,
    toggleTheme,
  }
}
