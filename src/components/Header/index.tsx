import { HeaderContainer } from './styles'
import { Moon, Scroll, Sun, Timer } from 'phosphor-react'

import logoImg from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useThemeContext } from '../../contexts/ThemeContext'

export function Header() {
  const { toggleTheme, isDarkTheme } = useThemeContext()

  return (
    <HeaderContainer>
      <div>
        <img src={logoImg} alt="" />
        <button onClick={() => toggleTheme()}>
          {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
