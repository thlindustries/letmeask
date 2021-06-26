import { ReactElement, useState, ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rainbow?: boolean;
  isOutlined?: boolean;
  customStyle?: string;
}

export const Button = ({
  rainbow = false,
  isOutlined = false,
  customStyle,
  ...rest
}: ButtonProps): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered && rainbow}
      isOutlined={isOutlined}
      customStyle={customStyle}
      {...rest}
    />
  );
};
