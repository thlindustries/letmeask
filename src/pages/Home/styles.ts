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
`;

export const CreateRoomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 4rem;
  height: 3.125rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: var(--orange);
  color: var(--white);

  border: 2px solid transparent;

  img {
    margin-right: 0.5rem;
  }

  transition: filter 0.2s, border-color 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;

  font-size: 0.875rem;
  color: var(--gray-300);

  margin: 2rem 0;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    margin-right: 1rem;

    background: var(--gray-300);
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    margin-left: 1rem;

    background: var(--gray-300);
  }
`;
