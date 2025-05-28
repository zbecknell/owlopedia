import { useDarkMode } from '../hooks/useDarkMode'

function DarkModeDebug() {
  const { isDark } = useDarkMode()

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black text-white p-2 rounded text-xs z-50">
      Dark Mode: {isDark ? 'ON' : 'OFF'}
      <br />
      HTML class: {document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
    </div>
  )
}

export default DarkModeDebug 