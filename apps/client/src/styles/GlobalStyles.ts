import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    /* Light Theme Colors */
    --color-text: #000000; /* Text color in light mode */
    --color-background: #ffffff; /* Background color in light mode */
    --color-hover: #007aff; /* Hover color in light mode */
    --color-button: #f2f2f7; /* Button color in light mode */
    --color-border: #c7c7cc; /* Border color in light mode */
  }

  @media (prefers-color-scheme: dark) {
    :root:not(.light):not(.dark) {
      /* Dark Theme Colors */
      --color-text: #ffffff; /* Text color in dark mode */
      --color-background: #1c1c1e; /* Background color in dark mode */
      --color-hover: #0a84ff; /* Hover color in dark mode */
      --color-button: #2c2c2e; /* Button color in dark mode */
      --color-border: #3a3a3c; /* Border color in dark mode */
    }
  }

  :root.dark {
    /* Dark Theme Colors */
    --color-text: #ffffff; /* Text color in dark mode */
    --color-background: #1c1c1e; /* Background color in dark mode */
    --color-hover: #0a84ff; /* Hover color in dark mode */
    --color-button: #2c2c2e; /* Button color in dark mode */
    --color-border: #3a3a3c; /* Border color in dark mode */
  }

  :root.light {
    /* Light Theme Colors */
    --color-text: #000000; /* Text color in light mode */
    --color-background: #ffffff; /* Background color in light mode */
    --color-hover: #007aff; /* Hover color in light mode */
    --color-button: #f2f2f7; /* Button color in light mode */
    --color-border: #c7c7cc; /* Border color in light mode */
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-background);
    color: var(--color-text);
    overflow: hidden;
  }

  a:hover {
    color: var(--color-hover);
  }

  button {
    background-color: var(--color-button);
    border: 1px solid var(--color-border);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    color: var(--color-text);
    font-size: 1em;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export default GlobalStyles;
