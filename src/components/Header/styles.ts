import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['text-title']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['ignite-mid']};
      }

      &.active {
        color: ${(props) => props.theme['ignite-mid']};
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    button {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['text-title']};
      background: none;
      border: none;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        /* color: ${(props) => props.theme['ignite-mid']}; */
        border-bottom: 3px solid ${(props) => props.theme['ignite-mid']};
      }
    }
  }
`
