import React, { Component } from 'react'
import { Normalize } from 'styled-normalize'

import { Body2 } from '@ui/atoms/Typography'
import { theme, GlobalStyles, styled, ThemeProvider } from '@ui/theme'
import { Register } from '@ui/pages'

const InnerContainer = styled.div`
  background-color: white;
  flex: 1;
  max-width: 414px;
`

class App extends Component {
  render() {
    return (
      <InnerContainer>
        <ThemeProvider theme={theme}>
          <>
            <Normalize />
            <GlobalStyles />
            <>
              <Register />
            </>
          </>
        </ThemeProvider>
      </InnerContainer>
    )
  }
}

export default App
