import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { ThemeContextProvider } from './contexts/ThemeContext'

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeContextProvider>
  )
}
