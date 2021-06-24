import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 1.5rem;
  border-radius: 0.5rem;

  min-height: 8.75rem;

  background: var(--white);
  margin-bottom: 1rem;

  .user-info {
    display: flex;
    align-items: center;
    margin-top: auto;

    img {
      width: 2rem;
      height: 2rem;

      border-radius: 50%;
    }

    p {
      margin-left: 0.5rem;
    }
  }

  .like-container {
    position: absolute;
    bottom: 24px;
    right: 24px;

    display: flex;
    align-items: center;

    p {
      margin-right: 0.5rem;

      color: var(--gray-400);

      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
    }
  }
`;
