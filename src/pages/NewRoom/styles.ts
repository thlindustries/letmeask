import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 7;

    padding: 7.5rem 5rem;

    background: var(--purple);
    color: var(--white);

    img {
      max-width: 20rem;
    }
    strong {
      font: 700 2.25rem 'Poppins', sans-serif;
      line-height: 2.625rem;
      margin-top: 1rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-top: 1rem;

      color: var(--white-grayed);
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 8;

    padding: 0 2rem;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  max-width: 20rem;

  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 1.5rem;
    margin: 4rem 0 1.5rem;
    font-family: 'Poppins', sans-serif;
  }

  form {
    input {
      height: 3.125rem;
      border-radius: 0.5rem;
      padding: 0 1rem;
      background: var(--white);
      border: 1px solid var(--gray-300);
    }

    button {
      margin-top: 1rem;
    }

    button,
    input {
      width: 100%;
    }
  }

  p {
    font-size: 0.875rem;
    color: var(--gray-400);
    margin-top: 1rem;

    a {
      color: var(--purple-light);
    }
  }
`;
