import { BodyContent } from "./snake";

export const setSnakeHeadPosition = (
  snakeHead: BodyContent,
  direction: string
): BodyContent => {
  switch (direction) {
    case "ArrowUp": {
      snakeHead = { ...snakeHead, y: snakeHead.y - 1 };
      break;
    }
    case "ArrowDown": {
      snakeHead = { ...snakeHead, y: snakeHead.y + 1 };
      break;
    }
    case "ArrowLeft": {
      snakeHead = { ...snakeHead, x: snakeHead.x - 1 };
      break;
    }
    case "ArrowRight": {
      snakeHead = { ...snakeHead, x: snakeHead.x + 1 };
      break;
    }
  }

  return snakeHead;
};

export const debounce = (fn: () => void) => {
  let timer: number;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, 500);
  };
};
