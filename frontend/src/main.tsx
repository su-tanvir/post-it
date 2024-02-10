import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './i18n/i18n'
import { ThemeContextProvider } from './store/Theme/ThemeContext'
import './styles/index.scss'

// React.version
// StrictMode only for development mode

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
)
