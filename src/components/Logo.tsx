import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../theme'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 0;
  @media screen and (max-width: ${breakpoints.md}px) {
    padding: 0;
    img {
      height: 38px;
    }
  }
`

const Logo: React.FC = () => (
  <LogoContainer>
    <img src="/assets/logo.png" alt="" />
  </LogoContainer>
)

export default Logo
