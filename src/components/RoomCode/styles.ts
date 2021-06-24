import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--white);
  border: 1px solid var(--purple);

  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--purple);
    padding: 0.75rem;
  }
  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    width: 15rem;

    font-size: 0.875rem;
    font-weight: 500;
  }

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;
