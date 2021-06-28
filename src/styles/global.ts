import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: #fff;
    --white-grayed: #f8f8f8;
    --white-grayed-100: #fefefe;
    --white-grayed-150: #f4f0ff;
    --white-grayed-200: #e2e2e2;

    --purple-light: #e559f9;
    --purple: #835afd;

    --orange: #ea4335;

    --gray-250: #dbdcdd;
    --gray-300: #a8a8b3;
    --gray-400: #737380;
    --gray-600: #29292e;

    --black: #000000;
  }

  body{
    background: var(--white-grayed);
    color: var(--gray-600);
  }

  body,input,button,textarea{
    font: 400 1rem 'Roboto', sans-serif;
  }

  button{
    &:hover{
      cursor: pointer;
    }
  }

  @media (max-width: 1080px){
    html{
      font-size: 93.75%; //15px
    }
  }
  @media (max-width: 720px){
    html{
      font-size: 87.5%; //14px
    }
  }
`;
