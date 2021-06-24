import styled from 'styled-components';

export const Container = styled.div``;

export const MainContent = styled.main`
  max-width: 50rem;
  margin: 0 auto;

  .title {
    display: flex;
    align-items: center;

    margin: 2rem 0 1.5rem;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      color: var(--gray-600);
    }

    span {
      margin-left: 1rem;
      background: var(--purple-light);
      border-radius: 9999px;
      padding: 0.5rem 1rem;

      color: var(--white);
      font-weight: 500;
      font-size: 0.875rem;
    }
  }

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 1rem;
      border-radius: 0.5rem;
      background: var(--white-grayed-100);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 8.125rem;
    }

    .send-button {
      min-width: 12rem;
    }

    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;

      span {
        font-size: 0.875rem;
        color: var(--gray-400);
        font-weight: 500;

        button {
          background: transparent;
          border: 0;
          color: var(--purple);

          text-decoration: underline;
          font-size: 0.875rem;
          font-weight: 500;
        }
      }

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 2rem;
          height: 2rem;

          border-radius: 50%;
        }

        > span {
          margin-left: 0.5rem;
          color: var(--gray-600);
          font-weight: 500;
          font-size: 0.875rem;
        }
      }
    }
  }
`;

export const QuestionContainer = styled.div`
  max-width: 50rem;
  margin: 0 auto;

  margin-top: 2rem;
`;
