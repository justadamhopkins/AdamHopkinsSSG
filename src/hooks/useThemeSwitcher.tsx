import { useEffect, useState } from 'react'

interface Themes {
  light: 'light'
  dark: 'dark'
}

export const useThemeSwitcher = () => {
  const themes: Themes = {
    light: 'light',
    dark: 'dark'
  }

  const windowCheck = typeof window !== 'undefined'

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (windowCheck) {
      const val = localStorage.getItem('theme')
      return val ? JSON.parse(val) : themes.light
    }
    return themes.light
  })

  useEffect(() => {
    if (windowCheck) {
      localStorage.setItem('theme', JSON.stringify(theme))
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  return {
    toggleTheme,
    theme
  }
}
