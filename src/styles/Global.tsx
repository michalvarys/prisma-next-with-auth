import { FC } from 'react'
import { css, Global as EmotionGlobal } from '@emotion/react'

export const globalStyles = css`
  /** disable double-tap zoom */
  * {
    touch-action: manipulation;
  }
  #app {
    background: transparent;
    position: relative;
    display: flex;
    flex: 1;
    width: 100%;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
  }

  .tox-notifications-container {
    display: none;
  }
`

const Global: FC = () => <EmotionGlobal styles={globalStyles} />

export default Global
