import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import { database } from 'services/firebase';
import { toast } from 'react-toastify';
import { useAuth } from './auth';

interface RoomProviderProps {
  children: React.ReactNode;
}

type Question = {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered: boolean;
  isHighlighted: boolean;
  likes: Record<
    string,
    {
      authorId: string;
    }
  >;
  likeCount: number;
  likeId: string | undefined;
};

interface RoomContextData {
  title: string;
  isLoading: boolean;
  questions: Question[];
  handleSetRoomId(id: string): void;
  sendQuestion(question: Omit<Question, 'id'>): Promise<void>;
  endRoom(roomId: string): Promise<void>;
  deleteQuestion(theRoomId: string, questionId: string): Promise<void>;
  checkQuestionAsAnswered(theRoomId: string, questionId: string): Promise<void>;
  highlightQuestion(theRoomId: string, questionId: string): Promise<void>;
}

type FirebaseQuestions = Record<string, Question>;

const RoomContext = createContext<RoomContextData>({} as RoomContextData);

export const RoomProvider = ({ children }: RoomProviderProps): any => {
  const [roomId, setRoomId] = useState('');
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const { user } = useAuth();

  const handleSetRoomId = (id: string): void => {
    setRoomId(id);
  };

  const sendQuestion = useCallback(
    async (question: Omit<Question, 'id'>): Promise<void> => {
      if (roomId.trim() === '') {
        toast.warning('Invalid roomId');
        return;
      }

      setIsLoading(true);
      const response = await database
        .ref(`rooms/${roomId}/questions`)
        .push(question);
      setIsLoading(false);

      if (response) {
        toast.success('Your question has been sent');
      } else {
        toast.error('Something went worng :(');
      }
    },
    [roomId],
  );

  const endRoom = useCallback(async (id: string) => {
    // TODO montar modal pra confirmação de encerramento da sala
    await database.ref(`rooms/${id}`).update({
      closedAt: new Date(),
    });
  }, []);

  const deleteQuestion = useCallback(
    async (theRoomId: string, questionId: string) => {
      setIsLoading(true);
      await database.ref(`rooms/${theRoomId}/questions/${questionId}`).remove();
      setIsLoading(false);
    },
    [],
  );

  const checkQuestionAsAnswered = useCallback(
    async (theRoomId: string, questionId: string) => {
      setIsLoading(true);
      await database.ref(`rooms/${theRoomId}/questions/${questionId}`).update({
        isAnswered: true,
      });
      setIsLoading(false);
    },
    [],
  );

  const highlightQuestion = useCallback(
    async (theRoomId: string, questionId: string) => {
      setIsLoading(true);
      await database.ref(`rooms/${theRoomId}/questions/${questionId}`).update({
        isHighlighted: true,
      });
      setIsLoading(false);
    },
    [],
  );

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => ({
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
          likes: value.likes ?? {},
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(
            ([, like]) => like.authorId === user.id,
          )?.[0],
        }),
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user.id]);

  return (
    <RoomContext.Provider
      value={{
        title,
        isLoading,
        questions,
        sendQuestion,
        handleSetRoomId,
        endRoom,
        deleteQuestion,
        highlightQuestion,
        checkQuestionAsAnswered,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export function useRoom(): RoomContextData {
  const context = useContext(RoomContext);

  return context;
}
