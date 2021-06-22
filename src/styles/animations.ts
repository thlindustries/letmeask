import { keyframes } from 'styled-components';

export const rainbowBorder = keyframes`
  0% {
    border-color: #ff0000;
  }
  10% {
    border-color: #ff8000;
  }
  20% {
    border-color: #ffff00;
  }
  30% {
    border-color: #80ff00;
  }
  40% {
    border-color: #00ff00;
  }
  50% {
    border-color: #00ff80;
  }
  60% {
    border-color: #00ffff;
  }
  70% {
    border-color: #0080ff;
  }
  80% {
    border-color: #0000ff;
  }
  90% {
    border-color: #8000ff;
  }
  100% {
    border-color: #ff0080;
  }
`;

export const rainbowBg = keyframes`
  0% { background-position: 0% 25% }
  25% { background-position: 50% 75% }
  50% { background-position: 100% 75% }
  75% { background-position: 50% 25% }
  100% { background-position: 25% 0% }
`;
