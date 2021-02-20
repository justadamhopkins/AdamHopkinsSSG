import { useEffect, useState } from 'react'

interface Themes {
  light: 'light'
  dark: 'dark'
}

type ThemeKeys = keyof Themes

export const useThemeSwitcher = () => {
  const themes: Themes = {
    light: 'light',
    dark: 'dark'
  }

  const isWindowAvailable = typeof window !== 'undefined'

  const decideTheme = (): ThemeKeys => {
    if (isWindowAvailable) {
      const val = localStorage.getItem('theme')
      return val ? JSON.parse(val) : themes.light
    }
    return themes.light
  }

  const [theme, setTheme] = useState<ThemeKeys>(decideTheme())

  useEffect(() => {
    if (isWindowAvailable) {
      localStorage.setItem('theme', JSON.stringify(theme))
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  const forceTheme = (theme: ThemeKeys) => {
    setTheme(theme)
  }

  return {
    toggleTheme,
    theme,
    forceTheme
  }
}
