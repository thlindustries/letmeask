import { ReactElement, useState } from 'react';
import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rainbow?: boolean;
}

export const Button = ({
  rainbow = false,
  ...rest
}: ButtonProps): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered && rainbow}
      {...rest}
    />
  );
};
