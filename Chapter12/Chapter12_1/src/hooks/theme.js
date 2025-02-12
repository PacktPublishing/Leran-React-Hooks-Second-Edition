import { useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext.js'

export default function useTheme() {
  return useContext(ThemeContext)
}
