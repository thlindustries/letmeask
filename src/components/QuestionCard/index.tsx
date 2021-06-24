import likeImg from 'assets/images/like.svg';

import { Container } from './styles';

type Question = {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered: boolean;
  isHighlighted: boolean;
};

type QuestionCardProps = {
  question: Question;
};

export const QuestionCard = ({ question }: QuestionCardProps): any => {
  return (
    <Container>
      <p>{question.content}</p>
      <div className="user-info">
        <img src={question.author.avatar} alt={question.author.name} />
        <p>{question.author.name}</p>
      </div>
      <div className="like-container">
        <p>10</p>
        <img src={likeImg} alt="like button" />
      </div>
    </Container>
  );
};
