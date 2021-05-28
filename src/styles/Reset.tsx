import { css, Global } from '@emotion/react'
import { FC } from 'react'

export const resetStyles = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  del,
  dfn,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  center,
  form,
  caption,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  input,
  button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }

  input,
  button {
    background-color: unset;
    :focus {
      outline: none;
    }
  }
  button {
    cursor: pointer;
  }

  code {
    background-color: #e8e8e8;
    border-radius: 3px;
    padding: 0.1rem 0.2rem;
  }

  blockquote {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;

    border-left: 2px solid #ccc;
    margin-left: 1.5rem;
    padding-left: 1rem;
  }
`

const Reset: FC = () => <Global styles={resetStyles} />

export default Reset
